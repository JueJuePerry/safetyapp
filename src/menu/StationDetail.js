import React, { Component } from 'react';
import { Text, View, Image, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { CustomHeader } from '../index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IMAGE } from '../constants/image';
import SplashScreen from 'react-native-splash-screen'

const Info = ({ iconname, title, text }) => {
  return <View style={styles.info}>
    <Icon style={styles.logo} name={iconname} size={34} color='#041d5e' />
    <View style={styles.description}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line}></View>
    </View>
  </View>
}

export class StationDetail extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    let { route, navigation } = this.props;
     const { type, station } = route.params;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader title="Detail Stations" navigation={navigation}></CustomHeader>

        <ScrollView style={{ flex: 1, paddingTop: 20 }}>
          <View style={styles.top}>
            <Image source={IMAGE.ICON_POLICE_STATION} style={styles.img} />
          </View>
          <View style={styles.bottom}>
          </View>
          <View style={styles.stationView}>
            <Text style={styles.station}>{station.title}</Text>
          </View>
          <Info iconname='phone-outline' title='Contact Number' text='01-534304' />
          <Info iconname='map-marker' title='Address' text={station.address} />
          <Info iconname='map-marker-distance' title='Distance from current location' text={station.distance} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  stationView: {
    // position: 'absolute'
    // marginTop: -37,
    // backgroundColor: '#edeceb',
    marginHorizontal: 50,
    marginTop: 80
    // zIndex: 20
  },
  station: {
    fontSize: 21,
    fontWeight: 'bold',
    //color: '#041d5e',
    color: '#4d2b1a',
    paddingTop: 20,
    textAlign: 'center',
    paddingBottom: 30,
    //paddingTop: 30

  },
  line: {
    width: 80,
    height: 3,
    backgroundColor: '#b55324',
    marginTop: 14
  },
  info: {
    marginVertical: 10,
    alignItems: 'center',
    //  justifyContent : 'center',
    flex: 1,
    flexDirection: 'row',
    width: null,
    paddingLeft: 50
  },
  logo: {
    paddingRight: 30,
    marginTop: -20,
    flex: 1
  },
  description: {
    flex: 8
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#4d2b1a'
  },
  text: {
    fontSize: 16,
    paddingTop: 4,
    color: 'gray'
  },
  top: {
    alignItems: 'center',
  },
  img: {
    height: 180,
    width: 270,
    resizeMode: 'cover',
    marginTop: 0,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray'
  },
  bottom2: {
    width: null,
    height: 30,
    borderTopWidth: 1.5,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopColor: '#c23525',
    borderLeftColor: '#c23525',
    borderRightColor: '#c23525',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -60,
    zIndex: -3
  },
  bottom: {
    width: null,
    height: 6,
    // borderTopWidth: 1.5,
    //borderLeftWidth: 1,
    //borderWidth: 1,
    //borderTopColor: '#c23525',
    //borderLeftColor: '#c23525',
    backgroundColor: '#c23525',
    // borderTopLeftRadius: 30,
    //borderTopRightRadius: 30,
    marginTop: -90,
    zIndex: -3
  },
  overlayText: {
    fontSize: 18,
    // fontWeight: 'bold',
    //color: '#041d5e',
    color: 'white',
    //  paddingTop: 10,
    paddingLeft: 16
    // textAlign: 'center'
  }
})