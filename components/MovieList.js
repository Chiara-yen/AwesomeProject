import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
} from 'react-native';

import MovieDetail from './MovieDetail';

const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class MovieList extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2,
			}),
			loaded: false,
	  };
	  this.showMovieDetail = this.showMovieDetail.bind(this);
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		fetch(REQUEST_URL)
			.then((response) => response.json())
			.then((responseData) => {
				// console.log(`%c fetchData get:`,'color:#F69;font-weight:bold;')
				// console.log(responseData.movies)
			  this.setState({
					dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
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
			  renderRow={this.renderMovie.bind(this)}
			  style={styles.listView}
			/>
		);
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

	showMovieDetail(movie) {
		this.props.navigator.push({
			title: 'Movie Detail',
			component: MovieDetail,
			passProps: {movie}
		});
	}

	renderMovie(movie) {
		// console.log(`%c renderMovie get:`,'color:yellowgreen;font-weight:bold;')
		// console.log(movie)
		return (
			<TouchableHighlight
				onPress={ () => this.showMovieDetail(movie) }
				underlayColor='#ffaaaa'>
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
	listView: {
		marginTop: 60,
		backgroundColor: '#F5FCFF',
	},
});