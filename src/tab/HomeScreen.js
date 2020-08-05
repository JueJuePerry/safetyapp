import React, { Component } from 'react';
import { Text, View, Image, Alert, Button, StyleSheet, BackHandler, SafeAreaView, TouchableOpacity } from 'react-native';
import { CustomHeader } from '../index';
import SplashScreen from 'react-native-splash-screen'
import { IMAGE } from '../constants/image';
import Icon from 'react-native-vector-icons/AntDesign';
//import BottomSheet from 'reanimated-bottom-sheet'
import RBSheet from "react-native-raw-bottom-sheet";
import { throwStatement } from '@babel/types';
import { useNavigationState } from '@react-navigation/native'

const CustomButton = ({ image, text, clickDetail }) => {
    return <View style={styles.row}>
    <Image source={image} style={styles.btn} />
    <TouchableOpacity style={styles.labelView} onPress={clickDetail}>
        <Text style={styles.label}>{text}</Text>
        <Icon name='circledown' size={20} color='#a35d55' style={styles.down} />
    </TouchableOpacity>
    </View>
}

export class HomeScreen extends Component {

    state= {
        description: '',
        title: ''
    }

    componentDidMount() {
        console.log("Did mount");
        SplashScreen.hide();
    }    

    componentWillUnmount() {
        console.log("Will Unmount");
      }
    
    render() {
        let { navigation } = this.props;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader title="SAFETY" isHome={true} navigation={navigation}></CustomHeader>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                   
                <CustomButton image={IMAGE.ICON_PANIC} text="Click me in Danger!" 
                clickDetail={() => this.openBottomSheet("Panic Situation", "When you click this button, we will send your current location, send picture and video to your contacts.")} />
                <CustomButton image={IMAGE.ICON_CONSCIOUS} text="Click me in Conscience!" 
                clickDetail={() => this.openBottomSheet("Conscious Situation", "When you click this button, we will send your current location and send picture to your contacts.")} />
                <CustomButton image={IMAGE.ICON_119} text="Click me for Help!" 
                clickDetail={() => this.openBottomSheet("Emergency Situation", "When you click this button, we will call 119 which is emergency call in Myanmar.")} />

                </View>

        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={230}
          openDuration={250}
          customStyles={{
            container: {
              justifyContent: "center",
              alignItems: "center",
              //backgroundColor: '#d65a45',
              backgroundColor: 'white',
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
            }
          }}
        >
            <View style={{ justifyContent: 'center',
         alignItems: 'center'}}>
            <Text style={styles.title}>{this.state.title}</Text>
            <View style={styles.line}></View>
            <Text style={styles.text}>{this.state.description}</Text>
            </View>
            
        </RBSheet>

            </SafeAreaView>
        );
    }
    openBottomSheet(title, desc){
        this.setState({ title, title, description: desc })
        this.RBSheet.open()
    }    
}


const styles = StyleSheet.create({
    line: {
       width: 100, borderWidth: 1, borderColor: '#a85232',
            marginTop: -10, marginBottom: 20
    },
    title: {
        fontSize: 27,
        fontWeight: 'bold',
        //color: 'white',
        color: '#041d5e',
        textAlign: 'center',
        paddingBottom: 20
    },
    text: {
        color: '#041d5e',
        //color: '#d9c8c5',
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 16
    },
    row: {
        flexDirection: 'row',
        padding: 20,
        paddingBottom: 30
    },
    btn: {
        width: 120, height: 120, borderRadius: 60, 
      },
      labelView: {
        //justifyContent: 'center',
        borderBottomWidth: 5,
        borderBottomColor: '#a35d55',
        borderBottomLeftRadius:10,
        borderBottomRightRadius: 10,
        width: 215,
        marginBottom: 25,
        flexDirection: 'row'
          },
      label: {
        fontSize: 18,
        color: '#694f45',
        paddingLeft: 22,
        marginTop: 30
      },
      down: {
          paddingLeft: 6,
          marginTop: 30
      }
    //   description: {
    //         fontSize: 14,
    //         color: 'gray',
    //         paddingLeft: 16 
    //   }
})