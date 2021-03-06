import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
  } from 'react-native';


export class SignUpScreen extends React.Component {
    constructor(props) {
        super(props);
        state = {
          email   : '',
          password: '',
          Retype:''
        }
      }
    
      onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed "+viewId);
      }
      static navigationOptions = {
        title: 'SignUp',
      };
      render() {
        return (
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
              <TextInput style={styles.inputs}
                  placeholder="Email"
                  keyboardType="email-address"
                  underlineColorAndroid='transparent'
                  onChangeText={(email) => this.setState({email})}/>
            </View>
            
            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
              <TextInput style={styles.inputs}
                  placeholder="Password"
                  secureTextEntry={true}
                  underlineColorAndroid='transparent'
                  onChangeText={(password) => this.setState({password})}/>
            </View>
    
            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
              <TextInput style={styles.inputs}
                  placeholder="Retype Password"
                  secureTextEntry={true}
                  underlineColorAndroid='transparent'
                  onChangeText={(Retype) => this.setState({Retype})}/>
            </View>

            <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('Terms and Condition')}>
                <Text>Terms and Condtion</Text>
            </TouchableHighlight>
    
            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('Register')}>
              <Text style={styles.loginText}>Register</Text>
            </TouchableHighlight>
    
           
          </View>
        );
      }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DCDCDC',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    loginButton: {
      backgroundColor: "#00b5ec",
    },
    loginText: {
      color: 'white',
    }
  });