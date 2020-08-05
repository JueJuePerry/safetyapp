import React, { Component } from 'react';
import { Text, Image, View, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { CustomHeader } from '../index';
import SplashScreen from 'react-native-splash-screen'
import Icon from 'react-native-vector-icons/Ionicons';
import { IMAGE } from '../constants/image';

const Card = ({ title, name, pressGuide }) => {
  return <TouchableOpacity style={styles.row} onPress={pressGuide}>
  <View style={styles.titleView}>
    <Text style={styles.title}>{title}</Text>
    </View>
  <Image source={name} style={styles.img} />   
  </TouchableOpacity>
}

export class GuideScreen extends Component {
  componentDidMount() {
    SplashScreen.hide();
} 
    render() {
      let { navigation } = this.props;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader title="Guide" navigation={navigation}></CustomHeader>
                <ScrollView style={{ flex: 1 , paddingTop: 15}}> 

                <Card pressGuide={() => navigation.navigate('GuideDetail')} name={IMAGE.ICON_SAFETY_COVID} title='Covid-19 Protection Guide' />
                <Card pressGuide={() => navigation.navigate('GuideDetail')} name={IMAGE.ICON_SAFETY_BLEEDING} title='Stop Bleeding in 3 minutes' />

                </ScrollView>
                </SafeAreaView>
              );
    }
}

const styles = StyleSheet.create({
  row: {
    height: 230,
    marginTop: 35
  },
  img: {
    height: 200,
    width: null,
    resizeMode: 'cover'
  },
  title: {
    fontSize: 18,
    color: '#c23525',
    fontWeight: 'bold',
  },
  titleView2: {
    alignSelf: 'flex-start',
    height: 40,
    borderTopWidth:1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#b55324',
    borderRightColor: '#b55324',
    borderBottomColor: '#b55324',
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    width: 'auto',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  titleView: {
    alignSelf: 'flex-start',
    height: 40,
    borderWidth: 1,
    borderColor: '#b55324',
    borderRadius: 30,
    width: 'auto',
    justifyContent: 'center',
    padding: 10,
    marginLeft: 16,
    marginBottom: 3
  }
}) 

/* 
import React, { Component } from 'react';
import { Text, Image, View, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { CustomHeader } from '../index';
import SplashScreen from 'react-native-splash-screen'
import Icon from 'react-native-vector-icons/Feather';
import { IMAGE } from '../constants/image';

const Card = ({ title, name }) => {
  return <View style={styles.row}>
  <Image source={name} style={styles.img} /> 
  <View style={{flexDirection: 'row', justifyContent: 'center'}}>
    <Icon name='chevrons-right' size={20} color='#694f45' style={{marginTop : 13, paddingRight: 6}} />
  <Text style={styles.title}>{title}</Text> 
  </View>
   
  </View>
}

export class GuideScreen extends Component {
  componentDidMount() {
    SplashScreen.hide();
} 
    render() {
      let { navigation } = this.props;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader title="Guide" navigation={navigation}></CustomHeader>
                <ScrollView style={{ flex: 1 }}> 

                <Card name={IMAGE.ICON_SAFETY_COVID} title='Covid-19 Protection Guide' />
                <Card name={IMAGE.ICON_SAFETY_BLEEDING} title='Stop Bleeding in 3 minutes' />
                <Card name={IMAGE.ICON_SAFETY_COVID} title='Covid-19 Protection Guide' />
                <Card name={IMAGE.ICON_SAFETY_BLEEDING} title='Stop Bleeding in 3 minutes' />

                </ScrollView>
                </SafeAreaView>
              );
    }
}

const styles = StyleSheet.create({
  img: {
    height: 200,
    width: null,
    resizeMode: 'cover'
  },
  row: {
    height: 250,
    width: null,
    marginTop: 35,
    elevation:4,
shadowOffset: { width: 20, height: 20 },
shadowColor: "grey",
shadowOpacity: 0.8,
shadowRadius: 20,
backgroundColor: 'white',
  },
  title: {
    fontSize: 19,
    color: '#a85232',
   // color: '#041d5e',
   // fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10
  },
  titleView: {
    alignSelf: 'flex-start',
   // height: 40,
    borderWidth: 1,
    borderColor: '#b55324',
    borderRadius: 30,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 3,
    marginLeft: 10
  }
}) */