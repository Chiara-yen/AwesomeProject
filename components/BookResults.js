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

export default class BookResults extends Component {
	constructor(props) {
	  super(props);
	  let dataSource = new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2,
			});
	  this.state = {
			dataSource: dataSource.cloneWithRows(this.props.books),
	  };
	}

	render() {
		return (
			<ListView
			  dataSource={this.state.dataSource}
			  renderRow={this.renderBook.bind(this)}
			  style={styles.listView}
			/>
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
		const imgURI = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '';
		return (
			<TouchableHighlight
				onPress={ () => this.showBookDetail(book) }
				underlayColor='#ffaaaa'>
			  <View style={styles.container}>
			    <Image
			      source={{ uri: imgURI }}
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
		backgroundColor: '#F5FCFF',
	},
});