
import React, { Component } from 'react';
import { Text, View, SafeAreaView, AsyncStorage, StyleSheet } from 'react-native';
import { CustomHeader } from '../index';
import SplashScreen from 'react-native-splash-screen'
import { CustomInput, Loader, CustomErrorText, CustomPromptButton } from '../core';
import { checkDuplicateUser, getUserDataWithPhone } from '../service/apiService';
import { firebase } from '../database/firebaseDb';
export class LoginScreen extends Component {

  state = {
    phone: '',
    phoneErr: false,
    exist: true,
    loading: false,
  }

  componentDidMount() {
    SplashScreen.hide();
  }
  sendOTP(){
    var phoneNumber = '+959793385339'
    var appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function (confirmationResult) {
          console.log("OTP Sent...")
          window.confirmationResult = confirmationResult;
        }).catch(function (error) {
          console.log("OTP Not send "+ JSON.stringify(error))
        });
  }
  goHome = async (data) => {
      try {
        await AsyncStorage.setItem(
          'userprofile', JSON.stringify( data )
        );
          console.log("Success async saving data")
        this.props.navigation.navigate('HomeApp');
      } catch (error) {
        console.log("Error saving data"+ JSON.stringify(error)) 
        this.props.navigation.navigate('HomeApp');
      }
  }
  goLogin() {
    this.setState({ loading: true, exist: true })
    if (this.state.phone == '' || this.state.phone == null || this.state.phone == undefined) {
      this.setState({ loading: false, phoneErr: true })
    }
    else {
      this.setState({ phoneErr: false })
      checkDuplicateUser(this.state.phone, '').then((result) => {
        if (!result) {
          //this.sendOTP(); //do it later
            getUserDataWithPhone(this.state.phone).then((result) =>{
      console.log("getUserDataWithPhone>>"+ JSON.stringify(result));
      this.setState({ loading: false })
       this.goHome(result);
    }).catch((error) =>{
      console.log("getUserDataWithPhone failed" + JSON.stringify(error));
    }) 
        }
        else {
          this.setState({ loading: false, exist: false })
        }
      }).catch((error) => {
        console.log("Failed checkDuplicateUser>>" + JSON.stringify(error));
        this.setState({ loading: false })
      })
    }
  }
  render() {
    let { navigation } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader isHome={false} navigation={navigation} />
        <Loader loading={this.state.loading} text="Please wait..." />
        <View style={styles.body}>
          <Text style={styles.signin}>
            Sign In!
              </Text>
          <View style={styles.lower}>

            <CustomInput type='numeric' placeholderText='Phone' inputValue={this.state.phone} iconname='email'
              onChangeMethod={(text) => this.setState({ phone: text })}
            />

            {
              this.state.phoneErr
                ?
                <CustomErrorText text='Please insert phone number!' />
                :
                null
            }
            {
              !this.state.exist
                ?
                <CustomErrorText text="Account doesn't exist" />
                :
                null
            }
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around' }}>
              <CustomPromptButton title="Cancel" />
              <CustomPromptButton title="Sign In" pressButton={() => this.goLogin()} />
            </View>
          </View>

        </View>
      </SafeAreaView>
    );
  }
}



const styles = StyleSheet.create({
  lower: {
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    backgroundColor: 'white',
    padding: 16,
    paddingTop: 39,
    flexGrow: 1,
    borderWidth: 1,
    borderColor: '#a85232'
  },
  body: {
    flex: 1
  },
  signin: {
    fontSize: 30,
    color: '#c23525',
    textAlign: 'left',
    paddingLeft: 16,
    paddingTop: 90,
    paddingBottom: 50
  }
}) 