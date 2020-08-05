import React, { Component } from 'react';
import { Text, View, BackHandler, SafeAreaView, TouchableOpacity } from 'react-native';
import { CustomHeader } from '../index';

export class FireScreen extends Component {
//   componentWillMount() {
//     BackHandler.addEventListener('hardwareBackPress', () => this.props.navigation.goBack());
// }
// componentWillUnmount() {
//     BackHandler.removeEventListener('hardwareBackPress', () => this.props.navigation.goBack());
// }
    render() {
      let { navigation } = this.props;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader title="Fire Detail" navigation={navigation}></CustomHeader>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>  
                  <Text>Fire Detail</Text>
                </View>
                </SafeAreaView>
              );
    }
}