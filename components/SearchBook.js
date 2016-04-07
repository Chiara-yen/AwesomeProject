import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ListView,
  TouchableHighlight,
  ActivityIndicatorIOS,
} from 'react-native';

import BookResults from './BookResults';

export default class SearchBook extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	author: '',
	  	title: '',
			isLoading: false,
			errorMessage: '',
	  };
	}

	render() {
		const { isLoading, errorMessage } = this.state;
		return (
			<View style={styles.container}>
				<Text style={styles.instructions}>Search by book title or/and book author</Text>
				<View>
					<Text style={styles.fieldLabel}>Book Title:</Text>
					<TextInput style={styles.searchInput} onChange={this.bookTitleInput.bind(this)}/>
				</View>
				<View>
					<Text style={styles.fieldLabel}>Book Author:</Text>
					<TextInput style={styles.searchInput} onChange={this.bookAuthorInput.bind(this)}/>
				</View>
				<TouchableHighlight
					style={styles.button}
					underlayColor='#f39c12'
					onPress={this.searchBooks.bind(this)}>
					<Text style={styles.buttonText}>Search</Text>
				</TouchableHighlight>
				{isLoading ? <ActivityIndicatorIOS hidden='true' size='large'/> : <View/>}
				<Text style={styles.errorMessage}>{errorMessage}</Text>
			</View>
		);
	}

	bookTitleInput(event) {
		this.setState({ title: event.nativeEvent.text });
	}

	bookAuthorInput(event) {
		this.setState({ author: event.nativeEvent.text });
	}

	searchBooks() {
		this.fetchData();
	}

	fetchData() {
		this.setState({ isLoading: true });

		const { title, author } = this.state;
		const hasBookTitle = title !== '';
		const hasBookAuthor = author !== '';
		let baseURL = 'https://www.googleapis.com/books/v1/volumes?q=';
		baseURL += hasBookAuthor ? encodeURIComponent('inauthor:' + author) : '';
		baseURL += hasBookTitle ? encodeURIComponent('intitle:' + title) : '';

		console.log(`%c baseURL => ${baseURL} `,'color:teal;font-weight:bold;');

		fetch(baseURL)
			.then((response) => response.json())
			.then((responseData) => {
				console.log(`%c fetchData get:`,'color:#F69;font-weight:bold;')
				console.log(responseData.items)
				this.setState({ isLoading: false });

				if (responseData.items) {
					this.props.navigator.push({
						title: 'Search Results',
						component: BookResults,
						passProps: {books: responseData.items}
					});
				} else {
					this.setState({ errorMessage: 'No results found' });
				}
			})
			.done();
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 65,
		padding: 10,
		backgroundColor: 'aliceblue',
	},
	searchInput: {
		height: 36,
		marginTop: 10,
		marginBottom: 10,
		fontSize: 18,
		borderWidth: 1,
		flex: 1,
		borderRadius: 4,
		padding: 5,
		backgroundColor: 'snow',
	},
	button: {
		height: 36,
		backgroundColor: 'cornflowerblue',
		borderRadius: 8,
		justifyContent: 'center',
		marginTop: 15
	},
	buttonText: {
		fontSize: 18,
		color: 'white',
		alignSelf: 'center'
	},
	instructions: {
		fontSize: 16,
		fontWeight: 'bold',
		alignSelf: 'center',
		marginTop: 15,
		marginBottom: 15,
		color: 'cornflowerblue',
	},
	fieldLabel: {
		fontSize: 12,
		marginTop: 15
	},
	errorMessage: {
		fontSize: 12,
		alignSelf: 'center',
		marginTop: 15,
		color: 'tomato'
	},
});