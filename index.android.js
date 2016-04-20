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
import Video from 'react-native-video';

class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.onLoad = this.onLoad.bind(this);
    this.onProgress = this.onProgress.bind(this);
  }

  state = {
    rate: 1,// 0 is paused, 1 is normal.
    volume: 1,// 0 is muted, 1 is normal.
    muted: false,// Mutes the audio entirely.
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
  };

  onLoad(data) {
    this.setState({duration: data.duration});
  }

  onProgress(data) {
    this.setState({currentTime: data.currentTime});
  }

  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
    } else {
      return 0;
    }
  }

  render() {
    const flexCompleted = this.getCurrentTimePercentage() * 100;
    const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;
    const URI = 'https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'; // OK
    // const URI = 'https://youtu.be/AuqvEYiMSeE'; // NO

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.fullScreen} onPress={() => {this.setState({paused: !this.state.paused})}}>
          <Video source={{uri: URI}}
                 style={styles.fullScreen}
                 rate={this.state.rate}
                 paused={this.state.paused}
                 volume={this.state.volume}
                 muted={this.state.muted}
                 resizeMode={this.state.resizeMode}
                 onLoad={this.onLoad}
                 onProgress={this.onProgress}
                 onEnd={() => { console.log('Done!') }}
                 repeat={false} />
        </TouchableOpacity>

        <View style={styles.controls}>
          <View style={styles.generalControls}>
            <View>
              <Text style={styles.instructions}>Rate : </Text>
              <View style={styles.rateControl}>
                {this.renderRateControl(0.25)}
                {this.renderRateControl(0.5)}
                {this.renderRateControl(1.0)}
                {this.renderRateControl(1.5)}
                {this.renderRateControl(2.0)}
              </View>
            </View>

            <View>
              <Text style={styles.instructions}>Volume : </Text>
              <View style={styles.volumeControl}>
                {this.renderVolumeControl(0.5)}
                {this.renderVolumeControl(1)}
                {this.renderVolumeControl(1.5)}
              </View>
            </View>

            <View>
              <Text style={styles.instructions}>Resize : </Text>
              <View style={styles.resizeModeControl}>
                {this.renderResizeModeControl('cover')}
                {this.renderResizeModeControl('contain')}
                {this.renderResizeModeControl('stretch')}
              </View>
            </View>
          </View>

          <View style={styles.trackingControls}>
            <View style={styles.progress}>
              <View style={[styles.innerProgressCompleted, {flex: flexCompleted}]} />
              <View style={[styles.innerProgressRemaining, {flex: flexRemaining}]} />
            </View>
          </View>
        </View>
      </View>
    );
  }

  renderRateControl(rate) {
    const isSelected = (this.state.rate == rate);
    const textStyle = isSelected ? [styles.controlOption, styles.controlOptionSelected] : styles.controlOption ;

    return (
      <TouchableOpacity onPress={() => { this.setState({rate: rate}) }}>
        <Text style={textStyle}>
          {rate}x
        </Text>
      </TouchableOpacity>
    )
  }

  renderResizeModeControl(resizeMode) {
    const isSelected = (this.state.resizeMode == resizeMode);
    const textStyle = isSelected ? [styles.controlOption, styles.controlOptionSelected] : styles.controlOption ;

    return (
      <TouchableOpacity onPress={() => { this.setState({resizeMode: resizeMode}) }}>
        <Text style={textStyle}>
          {resizeMode}
        </Text>
      </TouchableOpacity>
    )
  }

  renderVolumeControl(volume) {
    const isSelected = (this.state.volume == volume);
    const textStyle = isSelected ? [styles.controlOption, styles.controlOptionSelected] : styles.controlOption ;

    return (
      <TouchableOpacity onPress={() => { this.setState({volume: volume}) }}>
        <Text style={textStyle}>
          {volume * 100}%
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  controls: {
    backgroundColor: "transparent",
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
  },
  innerProgressCompleted: {
    height: 20,
    backgroundColor: '#cccccc',
  },
  innerProgressRemaining: {
    height: 20,
    backgroundColor: '#2C2C2C',
  },
  generalControls: {
    flex: 1,
    flexDirection: 'column',
  },
  rateControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'tomato',
  },
  volumeControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'tomato',
  },
  resizeModeControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'tomato',
  },
  controlOption: {
    alignSelf: 'center',
    fontSize: 14,
    color: "white",
    paddingLeft: 2,
    paddingRight: 2,
    fontWeight: 'bold',
  },
  controlOptionSelected: {
    color: '#f69'
  },
  instructions: {
    textAlign: 'center',
    color: 'tomato',
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
