import React, { Component } from 'react';
import { Text, View, Image, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { CustomHeader } from '../index';
import { IMAGE } from '../constants/image';
import Icon from 'react-native-vector-icons/AntDesign';

const Station = ({ image, title, text, pressMenu}) => {
  return <TouchableOpacity style={styles.row} onPress={pressMenu} >
                  <Image source={image} style={styles.logo} />
                  <View style={styles.description}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.text}>{text}</Text>
                  </View>
                    <Icon style={styles.detailLogo} name='rightcircle' size={34} color='#c23525' />
                </TouchableOpacity>

}

export class MenuScreen extends Component {
  goMenu(name){
    this.props.navigation.navigate(name)
  }
    render() {
      let { navigation } = this.props;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader title="Menus" isHome={false} navigation={navigation}></CustomHeader>
                <ScrollView style={{ flex: 1, paddingTop: 20}}>  

                <Station pressMenu={() => this.goMenu('PoliceStation')} image={IMAGE.ICON_POLICE} title='Police Station' text='Helps people in need!' />
                <Station pressMenu={() => this.goMenu('FireStation')} image={IMAGE.ICON_FIRE} title='Fire Station' text='Helps people to stop fire!' />
                <Station pressMenu={() => this.goMenu('MedicalCentre')} image={IMAGE.ICON_MEDICAL} title='Medical Centers' text='Saves people lives!' />
                <Station pressMenu={() => this.goMenu('DisasterAlert')} image={IMAGE.ICON_DISASTER_ALERT} title='Disaster Alert' text='Warns natural disaster!' />
                <Station pressMenu={() => this.goMenu('SafetyGuide')} image={IMAGE.ICON_SAFETY_GUIDE} title='Safety Guide' text='Guides to keep safe!' />

                  {/* <Text>Setting</Text>
                  <TouchableOpacity 
                  style={{ marginTop: 20 }}
                  onPress={() => navigation.navigate("PoliceStation") }
                  >
              <Text>Go Setting Detail</Text>
              </TouchableOpacity> */}
                </ScrollView>
                </SafeAreaView>
              );
    }
}

const styles = StyleSheet.create({
  description: {
    paddingLeft: 60
  },
  title: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    color: '#041d5e',
    paddingTop: 30
  },
  text: {
      fontSize: 16,
      color: '#041d5e',
      paddingTop: 10,
      textAlign: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    borderRadius: 7,
    height: 130,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    elevation:4,
shadowOffset: { width: 20, height: 20 },
shadowColor: "grey",
shadowOpacity: 0.8,
shadowRadius: 20,
marginLeft: 60 
  },
  logo: {
    width: 90,
    height: 90,
    borderWidth: 1,
    //borderColor: '#a85232',
    borderRadius: 60,
    position: 'absolute',
    marginTop: 20,
    marginLeft: -48,
    //zIndex: 2,
    backgroundColor: '#e3dbd5'
  },
  detailLogo: {
    position: 'absolute',
    right: -12,
    marginTop: 48
  }
})