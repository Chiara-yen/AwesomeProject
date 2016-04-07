import React, {
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';

import BookList from './BookList';

export default class Featured extends Component {
	render() {
		return (
			<NavigatorIOS
				style={styles.container}
				initialRoute={{
					title: 'Featured',
					component: BookList
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