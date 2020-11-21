import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignupLoginScreen from './screens/SignupLogin';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AppTabNavigator from './components/AppTabNavigator'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
}

const switchNavigator = createSwitchNavigator({
  signupLoginScreen: {screen: SignupLoginScreen},
  BottomTab: {screen: AppTabNavigator}
});

const AppContainer = createAppContainer(switchNavigator);