import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class Movie extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    movies: null,
	  };
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		fetch(REQUEST_URL)
			.then((response) => response.json())
			.then((responseData) => {
			  this.setState({
			    movies: responseData.movies,
			  });
			})
			.done();
	}

	render() {
		if (!this.state.movies) {
			return this.renderLoadingView();
		}
		return this.renderMovie(this.state.movies[0]);
	}

	renderLoadingView() {
		return (
		  <View style={styles.container}>
		    <Text>
		      Loading movies...
		    </Text>
		  </View>
		);
	}

	renderMovie(movie) {
		return (
		  <View style={styles.container}>
		    <Image
		      source={{uri: movie.posters.thumbnail}}
		      style={styles.thumbnail}
		    />
		    <View style={styles.rightContainer}>
		      <Text style={styles.title}>{movie.title}</Text>
		      <Text style={styles.year}>{movie.year}</Text>
		    </View>
		  </View>
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
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  rightContainer: {
    flex: 1,
  },
	title: {
	  fontSize: 20,
	  marginBottom: 8,
	  textAlign: 'center',
	},
	year: {
	  textAlign: 'center',
	},
});