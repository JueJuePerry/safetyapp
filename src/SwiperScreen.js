import React, { Component } from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'
import SplashScreen from 'react-native-splash-screen'
import { Button } from 'react-native-elements';
import { IMAGE } from './constants/image';

export class SwiperScreen extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    let { navigation } = this.props;
    return (
      <Swiper loop={false}
        activeDot={
          <View style={styles.swiperBody} />
        }
      >

        <View testID="Simple" style={styles.slide1}>

        <Image source={IMAGE.ICON_SAFETY_SPLASH_SCREEN}
              style={styles.img} />

          <Text style={styles.text2}>
            Welcome to Safety App
          </Text>
          <Button title="LOGIN" buttonStyle={styles.btn} titleStyle={styles.btnText}
            onPress={() => navigation.navigate("Login")}
          />
          <Button title="SIGN UP" buttonStyle={styles.btn} titleStyle={styles.btnText}
            onPress={() => navigation.navigate("Register", { title: 'Sign Up', btnName: 'Sign Up'})}
          />
          <Button title="GET STARTED" buttonStyle={styles.btn} titleStyle={styles.btnText}
            onPress={() => navigation.navigate("HomeApp")}
          />
        </View>

      </Swiper>
    );
  }
}


const styles = StyleSheet.create({
  img: {
    width: 130,
    height: 130,
    alignSelf: 'center'
  },
  swiperBody: {
    backgroundColor: '#000',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  },
  btnText: {
    color: '#965b54'
  },
  btn: {
    width: 280,
     borderRadius: 9,
     height: 40,
      backgroundColor: 'white', 
      marginTop: 10,
      marginHorizontal: 16,
      borderWidth: 1,
      borderColor: '#ad7a74'
      
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 40,
    marginRight: 40
  },
  text1: {
    color: 'black',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingBottom: 16
  },
  text2: {
    fontSize: 27,
    color: '#ba6e66',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 50
  }
})