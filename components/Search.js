import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Search extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.description}>Search Tab</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	description: {
	    fontSize: 20,
	    backgroundColor: 'white'
	},
	container: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center'
	}
});