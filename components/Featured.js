import React, {
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';

import MovieList from './MovieList';

export default class Featured extends Component {
	render() {
		return (
			<NavigatorIOS
				style={styles.container}
				initialRoute={{
					title: 'Featured',
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