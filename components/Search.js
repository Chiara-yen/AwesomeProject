import React, {
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';

import SearchBook from './SearchBook';

export default class Search extends Component {
	render() {
		return (
			<NavigatorIOS
				style={styles.container}
				initialRoute={{
					title: 'Search',
					component: SearchBook
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