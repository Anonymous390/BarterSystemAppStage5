import React, {Component} from 'react'
import {View, Text} from 'react-native'
import CustomSideBarMenu from './customSideBarMenu';

const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: TabNavigator
    },
    Settings: {
        screen: SettingScreen
    },
    },
    {
        contentComponent: customSideBarMenu
    },
    {
        initialRouteName: 'Home'
    }
);