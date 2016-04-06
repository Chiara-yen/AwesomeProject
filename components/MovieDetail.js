import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';

export default class MovieDetail extends Component {
	render() {
		const { movie } = this.props;
		return (
			<View style={styles.container}>
				<Image style={styles.image} source={{uri: movie.posters.thumbnail}} />
				<View style={styles.textContainer}>
				  <Text style={styles.title}>{movie.title}</Text>
				  <Text style={styles.year}>Year: {movie.year}</Text>
				  <Text style={styles.info}>DVD : {movie.release_dates.dvd}</Text>
				  <Text style={styles.info}>Link: {movie.links.alternate}</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  	alignItems: 'center',
    backgroundColor: 'aliceblue',
    paddingTop: 75,
  },
  image: {
    width: 106,
    height: 162,
  },
	textContainer: {
    flex: 1,
    margin: 20,
  },
	title: {
	  fontSize: 18,
	  marginBottom: 8,
	  textAlign: 'center',
	},
	year: {
		fontSize: 16,
		alignSelf: 'flex-start',
	  textAlign: 'left',
	  marginTop: 30,
	  marginBottom: 30,
	  color: 'grey'
	},
	info: {
		alignSelf: 'flex-start',
		textAlign: 'left',
		marginTop: 10,
		marginBottom: 10,
		color: 'cornflowerblue'
	}
});