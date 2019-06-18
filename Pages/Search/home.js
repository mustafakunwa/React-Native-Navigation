import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Image,Header,TouchableOpacity,ScrollView   } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

 export class HomeScreen extends React.Component {
    static navigationOptions = {
        title:'Home',
    };
    render() {
      let CategoriesView=[];
      let Categories=[
          {Name:'Cars',Icon:'ios-car' ,color:'red'},
          {Name:'Mobiles',Icon:'ios-phone-portrait',color:'blue'},
          {Name:'Bikes',Icon:'ios-bicycle',color:'orange'},
          {Name:'Electronics & Appliances',Icon:'logo-playstation',color:'green'},
          {Name:'Furniture',Icon:'ios-bed',color:'pink'},
          {Name:'Property',Icon:'ios-paper',color:'purple'},
          {Name:'Books & Sports',Icon:'ios-book',color:'violet'},
          {Name:'More Categories',Icon:'ios-keypad',color:'red'},
      ]
      let row=[];
      for(let i=0;i<Categories.length;i++){
          row.push(
           <TouchableOpacity key={Categories[i].Name} style={styles.Category}
             onPress={() => this.props.navigation.navigate('AdsScreen',
             {
              Category: Categories[i].Name,
            })}>
                <Icon size={25} name={Categories[i].Icon} color={Categories[i].color}/>  
                <Text>{Categories[i].Name}</Text>
            </TouchableOpacity>
          )
        if(row.length==3){
              CategoriesView.push(<View key={i} style={styles.row}>{row}</View>)
              row=[];
        }
      }
      return (
        <View style={styles.container}>
          <View style={styles.Categories}>
            <View style={styles.Header}>
                <Text style={styles.Browse}>Browse Categories</Text>
                <TouchableOpacity style={styles.SeeAll}><Text style={{color:'blue'}}>SeeAll</Text></TouchableOpacity>
            </View>
            <View style={styles.CatView}>
              {CategoriesView}
            </View>
          </View>           
          <View style={styles.Recomended}>
            <View style={styles.Header}>
              <Text style={styles.Browse}>Recommendations for you</Text>
            </View>
            <View style={styles.Recomendedscroll}>
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
    Categories:{
      flex:2,
      justifyContent: 'center',  
      alignItems: 'center',
      margin:10
    },
    Header:{
      flex:1,
      justifyContent: 'center',  
      alignItems: 'center',
      flexDirection:'row',
    },
    Browse:{
      flex:1,
      fontWeight:'bold'
    },
    SeeAll:{
      flex:1,
      alignItems: 'flex-end',
    },
    CatView:{
      flex:7,
      justifyContent: 'center',  
      alignItems: 'center'
    },
    Recomended:{
      flex:3,
      justifyContent: 'center',  
      alignItems: 'center',
      margin:10
    },
    Recomendedscroll:{
      flex:3
    },
    row:{
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center' ,
        flexDirection:'row',
    },
    Category:{
        flex:1,
        justifyContent: 'center',  
        alignItems: 'center' ,
        height:'100%'
    }
  
  }) 
