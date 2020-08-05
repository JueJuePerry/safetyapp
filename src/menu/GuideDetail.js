import React, { Component } from 'react';
import { Text, Image, View, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { CustomHeader } from '../index';
import SplashScreen from 'react-native-splash-screen'
import Icon from 'react-native-vector-icons/Ionicons';
import { IMAGE } from '../constants/image';

const Card = ({ title, name }) => {
  return <View style={styles.row}>
  <View style={styles.titleView}>
    <Text style={styles.title}>{title}</Text>
    </View>
  <Image source={name} style={styles.img} />   
  </View>
}

export class GuideDetail extends Component {
  componentDidMount() {
    SplashScreen.hide();
} 
    render() {
      let { navigation } = this.props;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader title="Guide" navigation={navigation}></CustomHeader>
                <ScrollView style={{ flex: 1 , paddingTop: 15}}> 

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
