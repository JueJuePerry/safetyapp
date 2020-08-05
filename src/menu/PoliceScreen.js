import React, { Component } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { CustomHeader } from '../index';
import Icon from 'react-native-vector-icons/AntDesign';

const PoliceStation = ({ numberText, title, text, pressMenu}) => {
  return <TouchableOpacity style={styles.row} onPress={pressMenu} >
                  <View style={styles.number}>
                    <Text style={styles.numberText}>{numberText}</Text>
                  </View>
                  <View style={styles.description}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.text}>{text}</Text>
                  </View>
                    <Icon style={styles.detailLogo} name='right' size={24} color='#c23525' />
                </TouchableOpacity>

}

export class PoliceScreen extends Component {

    state = {
      policestations: [
        {
          number: 1,
          title: 'Thaketa Police Station',
          address: 'Myin Taw Thar Rd., Ward (5), Thaketa',
          distance: '5.7 miles'
        },
        {
          number: 2,
          title: 'South Okkalapa Police Station',
          address: 'Thu Mingalar Rd., Corner of Thitsar Rd., Ward(10), South Okkalapa',
          distance: '3.5 miles'
        },
        {
          number: 3,
          title: 'Insein Police Station',
          address: 'Ywar Ma St., Ywar Ma (Mid) Ward., Insein',
          distance: '15.3 miles'
        },
        {
          number: 4,
          title: 'Mingalar Taung Nyunt Police Station',
          address: '116, Bo Min Yaung Rd., Corner of Myanma Gone Yee St.',
          distance: '9.7 miles'
        },
        {
          number: 5,
          title: 'Pazuntaung Police Station',
          address: '55/57/59, Bogyoke Aung San Rd., Pazuntaung',
          distance: '23 miles'
        },
        {
          number: 6,
          title: 'Kamayut Police Station',
          address: 'Hledan Rd., Ward (6), Kamayut, Yangon',
          distance: '4.5 miles'
        },
        {
          number: 7,
          title: 'Tarmwe Police Station',
          address: '353, Banyar Dala Rd., Corner of 150th St., Pyar Yae Gone Ward,, Tarmwe',
          distance: '8.1 miles'
        },
      ]
    }

    goDetail(station) {
      this.props.navigation.navigate('StationDetail', { type: 'police', station: station })
    }
    render() {
      let { navigation } = this.props;
      let stations = this.state.policestations;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader title="Police Stations" navigation={navigation}></CustomHeader>
                <ScrollView style={{ flex: 1, paddingTop: 20}}>  
                  <PoliceStation pressMenu={() => this.goDetail(stations[0])} numberText={this.state.policestations[0].number} title={this.state.policestations[0].title} text={this.state.policestations[0].address} />
                  <PoliceStation pressMenu={() => this.goDetail(stations[1])} numberText={this.state.policestations[1].number} title={this.state.policestations[1].title} text={this.state.policestations[1].address} />
                  <PoliceStation pressMenu={() => this.goDetail(stations[2])} numberText={this.state.policestations[2].number} title={this.state.policestations[2].title} text={this.state.policestations[2].address} />
                  <PoliceStation pressMenu={() => this.goDetail(stations[3])} numberText={this.state.policestations[3].number} title={this.state.policestations[3].title} text={this.state.policestations[3].address} />
                  <PoliceStation pressMenu={() => this.goDetail(stations[4])} numberText={this.state.policestations[4].number} title={this.state.policestations[4].title} text={this.state.policestations[4].address} />
                  <PoliceStation pressMenu={() => this.goDetail(stations[5])} numberText={this.state.policestations[5].number} title={this.state.policestations[5].title} text={this.state.policestations[5].address} />
                  <PoliceStation pressMenu={() => this.goDetail(stations[6])} numberText={this.state.policestations[6].number} title={this.state.policestations[6].title} text={this.state.policestations[6].address} />
               
                  </ScrollView>
                </SafeAreaView>
              );
    }
}

const styles = StyleSheet.create({
  description: {
   marginLeft: 80,
   position : 'absolute',
   //flexShrink: 1,
   width: 240,
   marginBottom: 10
  },
  numberText: {
    fontSize: 30,
    //color: 'white'
  },
  number: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 2,
    borderRightColor: '#a36143',
    marginVertical: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#041d5e',
    paddingTop: 20,
  },
  text: {
      fontSize: 15,
      color: '#8091ad',
      paddingTop: 5,
      overflow: 'hidden'
  },
  detailLogo: {
    position: 'absolute',
    right: 5,
    marginTop: 44
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   // width: 300,
  borderRadius: 7,
    height: 120,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    elevation:4,
shadowOffset: { width: 20, height: 20 },
shadowColor: "grey",
shadowOpacity: 0.8,
shadowRadius: 20,
overflow: 'hidden',
margin: 16
  },
})