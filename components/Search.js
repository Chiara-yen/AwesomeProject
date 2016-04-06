import React, {
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';

import MovieList from './MovieList';

export default class Search extends Component {
	render() {
		return (
			<NavigatorIOS
				style={styles.container}
				initialRoute={{
					title: 'Search',
					component: MovieList
				}}>
			</NavigatorIOS>
		);
	}
}

const styles = StyleSheet.create({
	container: {
	    flex: 1,
	}
});