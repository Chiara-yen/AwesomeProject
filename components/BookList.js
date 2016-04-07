import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  ActivityIndicatorIOS,
} from 'react-native';

import BookDetail from './BookDetail';

const REQUEST_URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:fiction';

export default class BookList extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2,
			}),
			loaded: false,
	  };
	  this.showBookDetail = this.showBookDetail.bind(this);
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		fetch(REQUEST_URL)
			.then((response) => response.json())
			.then((responseData) => {
				// console.log(`%c fetchData get:`,'color:#F69;font-weight:bold;')
				// console.log(responseData.books)
			  this.setState({
					dataSource: this.state.dataSource.cloneWithRows(responseData.items),
					loaded: true,
			  });
			})
			.done();
	}

	render() {
		if (!this.state.loaded) {
			return this.renderLoadingView();
		}
		return (
			<ListView
			  dataSource={this.state.dataSource}
			  renderRow={this.renderBook.bind(this)}
			  style={styles.listView}
			/>
		);
	}

	renderLoadingView() {
		return (
		  <View style={styles.container}>
		  	<ActivityIndicatorIOS size='large'/>
		    <Text>
		      Loading books...
		    </Text>
		  </View>
		);
	}

	showBookDetail(book) {
		this.props.navigator.push({
			title: 'Book Detail',
			component: BookDetail,
			passProps: {book}
		});
	}

	renderBook(book) {
		// console.log(`%c renderBook get:`,'color:yellowgreen;font-weight:bold;')
		// console.log(book)
		return (
			<TouchableHighlight
				onPress={ () => this.showBookDetail(book) }
				underlayColor='#ffaaaa'>
			  <View style={styles.container}>
			    <Image
			      source={{uri: book.volumeInfo.imageLinks.thumbnail}}
			      style={styles.thumbnail}
			    />
			    <View style={styles.rightContainer}>
			      <Text style={styles.title}>{book.volumeInfo.title}</Text>
			      <Text style={styles.author}>{book.volumeInfo.authors}</Text>
			    </View>
			  </View>
			</TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderWidth: 2,
    borderColor: 'transparent',
    borderBottomColor: '#eee',
  },
  thumbnail: {
    width: 53,
    height: 81,
    margin: 10,
  },
  rightContainer: {
    flex: 1,
  },
	title: {
	  fontSize: 16,
	  marginBottom: 8,
	  textAlign: 'left',
	},
	author: {
		fontSize: 10,
	  textAlign: 'left',
	  color: 'gray'
	},
	listView: {
		marginTop: 60,
		marginBottom: 50,
		backgroundColor: '#F5FCFF',
	},
});