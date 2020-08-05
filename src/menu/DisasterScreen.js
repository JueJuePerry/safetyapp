import React, { Component } from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { CustomHeader } from '../index';
import SplashScreen from 'react-native-splash-screen'
import Icon from 'react-native-vector-icons/Ionicons';

const Noti = ({ iconname, title, text, time, pressNoti }) => {
  return <TouchableOpacity style={styles.row} onPress={pressNoti}>
  <View style={styles.logo}>
    <Icon name={iconname} size={30} />
  </View>
  <View style={styles.description}>
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
    <Text numberOfLines={1} style={styles.text}>{text}</Text>
  </View>
</TouchableOpacity>
}

const ReadNoti = ({ iconname, title, text, time, pressNoti }) => {
  return <TouchableOpacity style={[ styles.row, styles.rowread, ]} onPress={pressNoti}>
  <View style={styles.logo}>
    <Icon name={iconname} size={30} />
  </View>
  <View style={styles.description}>
  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
    <Text numberOfLines={1} style={styles.text}>{text}</Text>
  </View>
</TouchableOpacity>
}

export class DisasterScreen extends Component {
  componentDidMount() {
    SplashScreen.hide();
} 
   
    render() {
      let { navigation } = this.props;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader title="Disaster Alerts" navigation={navigation}></CustomHeader>
                <ScrollView style={{ flex: 1 , paddingTop: 5}}>  
                {/* <Text style={{ fontSize: 23, paddingLeft: 16, paddingBottom: 10 }}>Alerts</Text> */}
                <Noti pressNoti={() => navigation.navigate('DisasterDetail')} iconname='thunderstorm-outline' time='3 mins ago' title='Storm' text='There might be strong storm the whole country on 30/7/2020.'  />
                <ReadNoti pressNoti={() => navigation.navigate('DisasterDetail')} iconname='thunderstorm-outline' time='yesterday' title='Storm' text='There might be strong storm the whole country on 30/7/2020.'  />
                <Noti iconname='thunderstorm-outline' time='12 Jun' title='Storm' text='There might be strong storm the whole country on 30/7/2020.'  />
                <ReadNoti iconname='thunderstorm-outline' title='Storm' text='There might be strong storm the whole country on 30/7/2020.'  />
                <ReadNoti iconname='thunderstorm-outline' title='Storm' text='There might be strong storm the whole country on 30/7/2020.'  />
                <ReadNoti iconname='thunderstorm-outline' title='Storm' text='There might be strong storm the whole country on 30/7/2020.'  />
                <Noti iconname='thunderstorm-outline' title='Storm' text='There might be strong storm the whole country on 30/7/2020.'  />
                <Noti iconname='thunderstorm-outline' title='Storm' text='There might be strong storm the whole country on 30/7/2020.'  />
                
                </ScrollView>
                </SafeAreaView>
              );
    }
}
const styles = StyleSheet.create({
  time: {
    color: '#bdacac',
    fontSize: 13,
    paddingRight: 10
  },
  logo: {
    borderWidth: 1,
    borderColor: '#a85232',
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    marginLeft: 16
  },
  description: {
flex: 13,
paddingLeft: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  text: {
    color: 'gray'
  },
row: {
  backgroundColor: '#c2baba',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems:'center',
 flex: 1,
borderRadius: 7,
  height: 70,
  ////marginTop: 10,
  marginBottom: 4,
  backgroundColor: 'white',
  elevation:4,
shadowOffset: { width: 20, height: 20 },
shadowColor: "grey",
shadowOpacity: 0.8,
shadowRadius: 20,
overflow: 'hidden',
padding: 6,
},
rowread: {
  backgroundColor: '#ded9d9',
},
})