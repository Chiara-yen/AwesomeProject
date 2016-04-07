import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView,
} from 'react-native';

export default class BookDetail extends Component {
	render() {
		const { book } = this.props;
		const imgURI = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '';
		return (
			<ScrollView style={styles.bgColor}>
				<View style={styles.container}>
					<Image style={styles.image} source={{ uri: imgURI }} />
					<View style={styles.textContainer}>
					  <Text style={styles.title}>{book.volumeInfo.title}</Text>
					  <Text style={styles.info}>{book.volumeInfo.description}</Text>
					</View>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	bgColor: {
    backgroundColor: 'aliceblue',
	},
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  	alignItems: 'center',
    paddingTop: 35,
  },
  image: {
    width: 107,
    height: 165,
  },
	textContainer: {
    flex: 1,
    margin: 20,
  },
	title: {
		alignSelf: 'center',
	  fontSize: 18,
	  fontWeight: 'bold',
	  marginBottom: 8,
	  color: 'cornflowerblue'
	},
	info: {
		alignSelf: 'flex-start',
		fontSize: 14,
		lineHeight: 20,
		marginTop: 10,
		marginBottom: 10,
		color: 'grey'
	}
});