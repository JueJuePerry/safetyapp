import React, { Component } from 'react';
import { Text, Image, View, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { CustomHeader } from '../index';
import SplashScreen from 'react-native-splash-screen'
import Icon from 'react-native-vector-icons/Ionicons';
import { IMAGE } from '../constants/image';

export class DisasterDetail extends Component {
  componentDidMount() {
    SplashScreen.hide();
} 
   
    render() {
      let { navigation } = this.props;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader title="Disaster Detail" navigation={navigation}></CustomHeader>
                <ScrollView style={{ flex: 1 , paddingTop: 15}}>  
                
                <View style={styles.top}>
                <Image source={IMAGE.ICON_STORM} style={styles.img} />
                 </View>
                 
                     <View style={styles.bottom}>

                    </View> 

                
                
                <View style={styles.row}>
                  <Text style={styles.title}>Storm Warning</Text>
                  <Text style={styles.time}>3 hours ago</Text>
                  <View style={styles.line}></View>
                  <Text style={styles.desc}>Gone are the days when you had to switch between apps, checking if it’s going to rain in one and seeing the weather forecast and in another. RainViewer puts it all in one app.Gone are the days when you had to switch between apps, checking if it’s going to rain in one and seeing the weather forecast and in another. RainViewer puts it all in one app.</Text>
              
                  <Text style={styles.desc}>Gone are the days when you had to switch between apps, checking if it’s going to rain in one and seeing the weather forecast and in another. RainViewer puts it all in one app.Gone are the days when you had to switch between apps, checking if it’s going to rain in one and seeing the weather forecast and in another. RainViewer puts it all in one app.</Text>
              
                </View>

                </ScrollView>
                </SafeAreaView>
              );
    }
}
const styles = StyleSheet.create({
  line: {
    width: 50,
    height: 3,
    backgroundColor: '#b55324',
    marginTop: 14
  },
  top: {
    alignItems : 'center',
  },
  row: {
   // width: 300,
  borderRadius: 7,
    flexGrow: 1,
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    elevation:4,
shadowOffset: { width: 20, height: 20 },
shadowColor: "grey",
shadowOpacity: 0.8,
shadowRadius: 20,
overflow: 'hidden',
margin: 10,
marginTop: 100
  },
  img: {
    height: 200,
    width: 300,
    resizeMode: 'cover',
    marginTop: 0,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray'
  },
  bottom: {
    width: null,
    height: 6,
    backgroundColor: '#c23525',
    marginTop: -90,
    zIndex: -3
   },
  description: {
flex: 13,
paddingLeft: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4d2b1a',
    paddingTop: 10
  },
  time: {
    color: 'gray'
  },
  desc: {
    paddingTop: 18,
    fontSize: 16
  }
  

})