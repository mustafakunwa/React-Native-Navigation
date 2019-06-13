import React, {Component} from 'react';
import {createStackNavigator, createAppContainer,createBottomTabNavigator,createDrawerNavigator} from 'react-navigation';
import {LoginScreen} from './Pages/Myprofile/Login';
import {SignUpScreen} from './Pages/Myprofile/Signup';
import {HomeScreen} from './Pages/Search/home';
import {CategoryScreen} from './Pages/Sell/Category'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, Text, View,Button} from 'react-native';    


const Ads = createStackNavigator(
  {    
     Home: {screen: HomeScreen},
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'steelblue',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        flex:1 
      },
    },
  }
);

const Sell = createStackNavigator(
  {    
     Home: {screen: CategoryScreen},
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'steelblue',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        flex:1 
      },
    },
  }
);

const ProfileNavigator = createStackNavigator(
  {    
    
     Login:{screen: LoginScreen},
     SignUp:{screen:SignUpScreen},
    
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'steelblue',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        flex:1 
      },
    },
  }
);

const TabNav=createMaterialBottomTabNavigator({
  Home: {
    screen: Ads,
    navigationOptions:{  
      tabBarLabel:'Explore',  
      tabBarIcon: ({ tintColor }) => (  
          <View>  
              <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
          </View>),  
       }  
  }, 
  Sell: {
    screen: Sell,
    navigationOptions:{  
      tabBarLabel:'Sell',  
      tabBarIcon: ({ tintColor }) => (  
          <View>  
              <Icon style={[{color: tintColor}]} size={25} name={'ios-camera'}/>  
          </View>),  
       }  
  }, 
  Login:{
    screen: ProfileNavigator,
    navigationOptions:{  
      tabBarLabel:'MyProfile',  
      tabBarIcon: ({ tintColor }) => (  
          <View>  
              <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
          </View>),  
    }
  },
},  
{
  initialRouteName: "Home",  
  activeColor: '#f2fd16',  
  inactiveColor: '#f0edf6',  
  barStyle: { backgroundColor: 'steelblue' },  
}
);

const AppContainer  = createAppContainer(TabNav);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


