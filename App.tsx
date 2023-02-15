/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {WebView} from 'react-native-webview';
import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StatusBarComp} from './component/StatusBarComp';
import styles from './styles';

const MyOwnWeb = () => {
  return (
    <WebView
      source={{uri: 'https://www.wmzspace.space'}}
      style={{marginTop: 30, flex: 1}}
      originWhitelist={['*']}

      // onNavigationStateChange={this.onNavigationStateChange}
    />
  );
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBarComp />
      <MyOwnWeb />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
