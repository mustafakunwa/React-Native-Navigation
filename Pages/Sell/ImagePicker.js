import React, {Component} from 'react';
import {  StyleSheet, Text, TouchableOpacity, View ,Image,Dimensions} from 'react-native';

export class ImagePickerScreen extends React.Component {
static navigationOptions = {
        title: 'IMAGE PICKER',
    };

    render() {
    return (
        <View style={styles.container}>
        
        </View>
    );
    }
}

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
      },
      
    });