import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import ExchangeScreen from '../screens/ExchangeScreen';
export const appTabNavigator = createBottomTabNavigator({
    ExchangeItems: {screen: ExchangeScreen,},
    HomeScreen: {screen: HomeScreen,}
});