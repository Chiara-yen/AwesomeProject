/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import ToastAndroid from './components/ToastAndroid';

class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Never clicked',
      count: 0,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
        <TouchableOpacity onPress={this.clickHandler.bind(this)}>
          <Text style={styles.button}>
            Click Me!
          </Text>
        </TouchableOpacity>
        <Text style={styles.alert}>
          {this.state.text}
        </Text>
        <Text style={styles.alert}>
          count : {this.state.count}
        </Text>
      </View>
    );
  }

  clickHandler() {
    const count = this.state.count + 1;
    ToastAndroid.show('Awesome ( ' + count + ' )', ToastAndroid.SHORT);
    this.setState({
      text: 'Clicked !!!',
      count: count
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#f69',
    margin: 10,
    borderWidth: 2,
    borderRadius: 5,
    width: 100,
    height: 20,
  },
  alert: {
    fontSize: 14,
    textAlign: 'center',
    color: '#f69',
    marginTop: 25,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
