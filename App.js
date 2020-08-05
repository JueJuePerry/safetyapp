import React, { Component } from 'react';
import { Text, View, Image, Button, AsyncStorage, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawerContent } from './src';
import { HomeScreen, MenuScreen } from './src/tab';
import { PoliceScreen, FireScreen, GuideScreen, GuideDetail, DisasterScreen, DisasterDetail, MedicalScreen, StationDetail } from './src/menu';
import { NotificationsScreen } from './src/drawer';
import { LoginScreen, RegisterScreen, Maps } from './src/auth';
import { SwiperScreen } from './src/SwiperScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { Loader } from './src/core';

const Tab = createBottomTabNavigator();
const StackMenu = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false
})

function MenuStack(){
  return(
    <StackMenu.Navigator initialRouteName="Menu">
      <StackMenu.Screen name="Menu" component={MenuScreen} options={navOptionHandler} />
      <StackMenu.Screen name="PoliceStation" component={PoliceScreen} options={navOptionHandler} />
      <StackMenu.Screen name="FireStation" component={FireScreen} options={navOptionHandler} />
      <StackMenu.Screen name="MedicalCentre" component={MedicalScreen} options={navOptionHandler} />
      <StackMenu.Screen name="DisasterAlert" component={DisasterScreen} options={navOptionHandler} />
      <StackMenu.Screen name="SafetyGuide" component={GuideScreen} options={navOptionHandler} />
      <StackMenu.Screen name="StationDetail" component={StationDetail} options={navOptionHandler} />
      <StackMenu.Screen name="GuideDetail" component={GuideDetail} options={navOptionHandler} />
      <StackMenu.Screen name="DisasterDetail" component={DisasterDetail} options={navOptionHandler} />
    </StackMenu.Navigator>
  );
}

function TabNavigator(){
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let icon = {
          name: '',
          color: ''
        }

        if (route.name === 'Home') {
          iconName = focused ? 
            icon={name:'home', color: '#c23525'}
            : 
            icon={name:'home', color: 'gray'}
          
        } else if (route.name === 'Menus') {
          iconName = focused ?
          icon={name:'apps', color: '#c23525'}
          : 
          icon={name:'apps', color: 'gray'}
        }
       return  <Icon name={icon.name} size={22} color={icon.color} />
      },
    })}
    tabBarOptions={{
      paddingTop: 10,
      activeTintColor: '#c23525',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 13,
        paddingBottom: 3
      },
      style: {
        height: 50
      }
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Menus" component={MenuStack} />
  </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerNavigator({ navigation }) {
  return (
    <Drawer.Navigator drawerStyle={{ width: 280 }}
      initialRouteName="MenuTab"
      drawerContent={() => <CustomDrawerContent navigation={navigation} />} >
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Register" component={RegisterScreen} />
    </Drawer.Navigator>
  );
}

const StackApp = createStackNavigator();

export default class App extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
   // this._retrieveData();
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('userprofile');
      const userProfile = JSON.parse(value);
      console.log("App userProfile>>" + JSON.stringify(userProfile));
      if (userProfile !== null) {
        console.log("App userProfile 2>>" + JSON.stringify(userProfile));
        this.setState({ startPage: 'Swiper2' })
      }
      else{
        this.setState({ startPage: 'Swiper2' })
      }
    } catch (error) {
      console.log("Async Error>>" + JSON.stringify(error))
    }
  };


  render(){
  return (
      <NavigationContainer>
      <StackApp.Navigator initialRouteName="Swiper2">
      <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler} />
      <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler} />
      <StackApp.Screen name="Swiper2" component={SwiperScreen} options={navOptionHandler} />
      <StackApp.Screen name="Register" component={RegisterScreen} options={navOptionHandler} />
    </StackApp.Navigator>
    </NavigationContainer>
  );
  }
}