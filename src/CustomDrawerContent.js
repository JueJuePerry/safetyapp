import React, { Component } from 'react';
import { Text, View, Image, SafeAreaView, StyleSheet, AsyncStorage, TouchableOpacity, ScrollView } from 'react-native';
import { IMAGE } from './constants/image';
import Icon from 'react-native-vector-icons/Ionicons';


const Menu = ({ page, iconname, title  }) => {
  return <TouchableOpacity style={styles.row} onPress={() => navigation.navigate(page)}>
              <Icon name={iconname} size={22} color='#a85232' />
              <Text style={styles.caption}>{title}</Text>
            </TouchableOpacity>
}

export class CustomDrawerContent extends Component {

  state = {
    personal: {
      name: '',
      phone: '',
      email: ''
    },
    contact1: {
      phone: '',
      email: ''
    },
    contact2: {
      phone: '',
      email: ''
    },
    contact3: {
      phone: '',
      email: ''
    },
    emergency: {
      text: '',
      location: true,
      picture: true,
      video: true
    },
    conscious: {
      text: '',
      location: false,
      picture: false,
      video: false
    },
    pageName: '',
    iconName: '',
    buttonName: ''
  }

  componentDidMount(){
    this._retrieveData();
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('userprofile');
      const userProfile = JSON.parse(value);
      if (userProfile !== null) {
        console.log("Async Value>>" + JSON.stringify(userProfile));
        this.setState({
          ...userProfile, 
          iconName: 'create',
          buttonName: 'Edit',
          pageName: 'Register'
        })
      }
      else{
        this.setState({
          personal: {
            name: 'Visitor'
          },
          iconName: 'log-in',
          buttonName: 'Login',
          pageName: 'Login'
        })
      }
    } catch (error) {
      console.log("Async Error>>" + JSON.stringify(error))
    }
  };

    render() {
      let { navigation } = this.props;
        return(
          <SafeAreaView style={{ flex: 1}} >
          <View style={styles.topView}>
            {/* <Image source={IMAGE.ICON_GIRL}
              style={styles.profile} /> */}
            <Text style={styles.name}>{this.state.personal.name}</Text>
            <Text style={styles.phone}>{this.state.personal.phone}</Text>

            <TouchableOpacity style={styles.profileBtn} onPress={() => navigation.navigate(this.state.pageName, { title: 'Edit Profile', btnName: 'Update' })}>
              <Icon name={this.state.iconName} size={22} color='#a85232' />
              <Text style={styles.profileText}>{this.state.buttonName}</Text>
            </TouchableOpacity>

            <View style={styles.line}></View>
          </View>
          <ScrollView style={{ marginLeft: 5 }}>
  
            <Menu page="MenuTab" iconname="home" title="Home" />
            <Menu page="Notifications" iconname="settings-sharp" title="Settings" />
            <Menu page="Notifications" iconname="information-circle-sharp" title="About" />
            <Menu page="Notifications" iconname="create" title="Feedback" />
            <Menu page="Notifications" iconname="star" title="Rate App" />
            
            
          </ScrollView>
        </SafeAreaView>
            );
    }
}


const styles = StyleSheet.create({
  profileBtn: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#c23525',
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 5,
    width: 80,
    marginTop: 12,
    marginLeft: 18
  },
  profileText: {
    paddingLeft: 10,
    paddingTop: 3
  },
  row: {
    marginTop: 25, flexDirection: 'row',
    paddingLeft: 26,
    paddingBottom: 10
  },
  img: {
    width: 20, height: 20
  },
  caption: {
    fontSize: 19,
    marginLeft: 30,
    color: '#694f45'
  },
  topView: {
    height: 150, justifyContent: 'center', marginLeft: 20
  },
  profile: {
    width: 130, height: 120, borderRadius: 60, paddingTop: 20
  },
  name: {
    fontSize: 18, 
    paddingTop: 16, 
    paddingLeft: 16, 
    fontWeight: 'bold', 
    color: '#694f45'
  },
  phone: {
    fontSize: 16, 
    paddingTop: 5, 
    paddingLeft: 16, 
    color: 'gray'
  },
  line: {
    width: 140, borderWidth: 1, borderColor: '#a85232',
            marginTop: 30
  }
})