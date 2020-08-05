import React, { Component } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { CustomHeader } from '../index';

export class MedicalScreen extends Component {
    render() {
      let { navigation } = this.props;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CustomHeader title="Medical" navigation={navigation}></CustomHeader>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>  
                  <Text>Medical Detail</Text>
                </View>
                </SafeAreaView>
              );
    }
}