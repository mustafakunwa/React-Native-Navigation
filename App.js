import React, {Component} from 'react';
import {createStackNavigator, createAppContainer,createBottomTabNavigator,createDrawerNavigator} from 'react-navigation';
import {LoginScreen} from './Pages/Login';
import {SignUpScreen} from './Pages/Signup';
import {HomeScreen} from './Pages/home';




const MainNavigator = createStackNavigator(
  {    
     Home: {screen: HomeScreen},
     Login:{screen: LoginScreen},
     SignUp:{screen:SignUpScreen},
    
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

const TabNav=createBottomTabNavigator({
  Home: {screen: MainNavigator},   
  Login:{screen: MainNavigator},
},  
{
  animationEnabled: false,
  swipeEnabled: false,   
}
);


const DrawerNav=createDrawerNavigator(
  {
    Home: {screen: TabNav},
    Login:{screen: TabNav},
    
  },
  {
    drawerWidth: 250,
  }
);


const AppContainer  = createAppContainer(DrawerNav);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


