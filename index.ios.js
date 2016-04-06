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
  TabBarIOS,
} from 'react-native';

import Featured from './components/Featured';
import Search from './components/Search';
import Movie from './components/Movie';

class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'featured'
    };
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'featured'}
          systemIcon='featured'
          onPress={() => {
              this.setState({
                  selectedTab: 'featured'
              });
          }}>
          <Featured/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'search'}
          systemIcon='search'
          onPress={() => {
              this.setState({
                  selectedTab: 'search'
              });
          }}>
          <Search/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
