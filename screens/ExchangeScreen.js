import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ListItem, FlatList } from 'react-native';
import firebase from 'firebase';
import db from '../config'

export default class ExchangeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: firebase.auth().currentUser.email,
            itemName: "",
            description: "",
        }
    }

    addItem = (itemName, description) => {
        var username = this.state.userId;
        db.collection('exchange_requests').add({
            username: username,
            item_name: itemName,
            description: description,
        });
        this.setState({
            itemName: '',
            description: ''
        })

        return Alert.alert(
            'Item ready to exchange',
            '',
            [
                {text: 'OK', onPress: () => {
                    this.props.navigation.navigate('HomeScreen')
                }}
            ]
        );
    }

    keyExtractor = (item, index) => index.toString()

    renderItem=({item, i})=>{
        console.log(this.itemName)
        return (
            <ListItem key={i} title={item.item_name} subtitle={item.description} titleStyle={{color: 'black', frontWeight: 'bold'}}
                rightElement={
                    <TouchableOpacity styles={styles.button}>
                        <Text style={{color: "#ffffff"}}>Exchange</Text>
                    </TouchableOpacity>
                }
            >
            </ListItem>
        );
    }

    render(){
        return(
            <View>
                <TextInput style={{margin:70, marginLeft: 50,}} placeholder="Item Name"></TextInput>
                <TextInput style={{margin:70, marginLeft: 50,}} placeholder="Item Name" multiline="true"></TextInput>
                <TouchableOpacity style={{margin:70, marginLeft: 50,}} onPress={() => {
                    this.addItem(this)
                }} ></TouchableOpacity>
                <FlatList keyExtractor={this.keyExtractor} >
                </FlatList>
            </View>
        );
    }
}