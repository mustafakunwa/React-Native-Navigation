import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Image,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export class CategoryScreen extends React.Component {
    static navigationOptions = {
        title:'What are you offering?',
        //headerTitle: <LogoTitle />,
    };
   

    render() {
      let CategoriesView=[];
      let Categories=[
          {Name:'Cars',Icon:'ios-car'},
          {Name:'Mobiles',Icon:'ios-phone-portrait'},
          {Name:'Bikes',Icon:'ios-bicycle'},
          {Name:'Electronics & Appliances',Icon:'logo-playstation'},
          {Name:'Furniture',Icon:'ios-bed'},
          {Name:'Property',Icon:'ios-paper'},
          {Name:'Books & Sports',Icon:'ios-book'},
          {Name:'More Categories',Icon:'ios-keypad'},
      ]
      let row=[];
      for(let i=0;i<Categories.length;i++){
          row.push(
           <TouchableOpacity key={Categories[i].Name} style={styles.Category}>
                <Icon size={25} name={Categories[i].Icon}/>  
                <Text>{Categories[i].Name}</Text>
            </TouchableOpacity>
          )
        if(row.length==2){
              CategoriesView.push(<View key={i} style={styles.row}>{row}</View>)
              row=[];
        }
      }

      return (
        <View style={styles.container}>
            {CategoriesView}
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

  
