import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Image,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export class CategoryScreen extends React.Component {
    static navigationOptions = {
        title:'What are you offering?',
        //headerTitle: <LogoTitle />,
    };
   

    render() {
     
      return (
        <View style={styles.container}>
             <View style={styles.row}>
                <View style={styles.Category}>
                    <Icon size={25} name={'ios-car'}/>  
                    <Text>Cars</Text>
                </View>
                <View style={styles.Category}>
                    <Icon size={25} name={'ios-phone-portrait'}/>  
                    <Text>Mobiles</Text>
                </View>              
            </View>
            <View style={styles.row}>
            <View style={styles.Category}>
                    <Icon size={25} name={'md-bicycle'}/>  
                    <Text>Bikes</Text>
                </View>
                <View style={styles.Category}>
                    <Icon size={25} name={'logo-playstation'}/>  
                    <Text>Electronics & Appliances</Text>
                </View>
            </View>
            <View style={styles.row}>
            <View style={styles.Category}>
                    <Icon size={25} name={'ios-bed'}/>  
                    <Text>Furniture</Text>
                </View>
                <View style={styles.Category}>
                    <Icon size={25} name={'ios-paper'}/>  
                    <Text>Property</Text>
                </View>   
            </View>
            <View style={styles.row}>
            <View style={styles.Category}>
                    <Icon size={25} name={'ios-book'}/>  
                    <Text>Books & Sports</Text>
                </View>
                <View style={styles.Category}>
                    <Icon size={25} name={'ios-keypad'}/>  
                    <Text>More Categories</Text>
                </View>   
            </View>
       
       </View>
      );
    }
  }

  const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center'  
    },  
    row:{
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center' ,
        flexDirection:'row',
        borderBottomColor: '#3b4045',
        borderBottomWidth: 1,
    },
    Category:{
        flex:1,
        justifyContent: 'center',  
        alignItems: 'center' ,
        borderLeftColor: '#3b4045',
        borderLeftWidth: 1,
        height:'100%'
    }

}); 

  
