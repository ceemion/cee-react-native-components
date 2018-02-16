import React, { PureComponent } from 'react';
import {
  Text,
  View,
  NetInfo,
  Dimensions,
  StyleSheet,
} from 'react-native';

const window = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width
}

const OfflineBar = () => {
  return (
    <View style={styles.barContainer}>
      <Text style={styles.offlineText}>
        No Internet Connection
      </Text>
    </View>
  )
}

class CeeOfflineNotice extends PureComponent {
  state = {
    isConnected: false,
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      this.handleConnectivityChange
    );
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      this.handleConnectivityChange
    )
  }

  handleConnectivityChange = (isConnected) => {
    this.setState({ isConnected })
  }

  render() {
    if (this.state.isConnected) {
      return null
    }

    return <OfflineBar />
  }
}

const styles = StyleSheet.create({
  barContainer: {
    alignItems: 'center',
    backgroundColor: 'red',
    justifyContent: 'center',
    height: 30,
    width: window.width,
  },
  offlineText: {
    color: 'white',
    fontSize: 15,
  },
});

export default CeeOfflineNotice;
