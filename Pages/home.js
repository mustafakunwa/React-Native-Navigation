import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Image,Header} from 'react-native';

class LogoTitle extends React.Component {
    render() {
      let pic={
        uri:'https://saifsys.com/img/logo.png'
        }
      return (
        <Image
          source={pic}
          style={{ width: 30, height: 30 }}
        />
      );
    }
  }

  export class HomeScreen extends React.Component {
    static navigationOptions = {
        title:'Home',
        //headerTitle: <LogoTitle />,
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       
        <Button
           title="Go to Login"
        //    onPress={() => this.props.navigation.navigate('Login')}
           onPress={()=>this.props.navigation.openDrawer()}
         />       
       </View>
      );
    }
  }

  
