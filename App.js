import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';


import CreationScreen from './Screens/CreationScreen'
import LoginScreen from './Screens/LoginScreen'


export default class App extends React.Component{
  render(){
   return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
 LoginScreen:LoginScreen,
 CreationScreen:CreationScreen
});

const AppContainer = createAppContainer(AppNavigator);
