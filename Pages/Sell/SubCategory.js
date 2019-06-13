import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Image,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export class SubCategoryScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('Category'),
        };
      };   

    render() {
     
      let Categories=[
          {Name:'Cars'},
          {Name:'Mobiles'},
          {Name:'Bikes'},
          {Name:'Electronics & Appliances'},
          {Name:'Furniture'},
          {Name:'Property'},
          {Name:'Books & Sports'},
          {Name:'More Categories'},
      ]
      let row=[];
      for(let i=0;i<Categories.length;i++){
          row.push(
            <View key={i} style={styles.row}>
                <TouchableOpacity style={styles.Category} 
                 onPress={() => this.props.navigation.navigate('InsertDetail',
                    {
                        Category: Categories[i].Name,
                    })}>
                    <Text>{Categories[i].Name}</Text>
                </TouchableOpacity>
            </View>
          )
      }

      return (
        <View style={styles.container}>
            {row}
       </View>
      );
    }
  }

  const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        alignItems: 'center'  
    },  
    row:{
        height:'8%',
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
    }

}); 

  
