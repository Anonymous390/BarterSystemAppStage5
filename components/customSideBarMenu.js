import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';

export default class CustomSideBarMenu extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <DrawerItems {...this.props} />
                <View style={{flex:1, justifyContent:'flex-end', padding: 10, height: 30, width: '100%'}}>
                    <TouchableOpacity style={{justifyContent: 'center', padding:10, height: 30, width: '100%'}}
                    onPress={() => {
                        this.props.navigation.navigate('WelcomeScreen');
                        firebase.auth().signOut();
                    }}
                    >
                        <Text>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}