import React, { Component } from 'react';
import { Text, View, Image, Button, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { IMAGE } from './constants/image';
import Icon from 'react-native-vector-icons/Feather';

export class CustomHeader extends Component {
    render() {
        let { navigation, isHome, title} = this.props;
        return (
            <View style={{ flexDirection: 'row', height: 60, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, backgroundColor: '#c23525' }}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    {
                        isHome ?
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                               <Icon
                               style={{ marginLeft: 10 }}
                  name='menu'
                  size={27}
                  color='white'
                />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}
                                onPress={() => navigation.goBack()}
                            >
                                <Icon name='chevron-left' size={28} color='white' />              
                            </TouchableOpacity>
                    }
                </View>
                <View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                        letterSpacing: 2
                    }}>{title}</Text>
                </View>
                <View style={{ flex: 1 }}>
                </View>
            </View>
        );
    }
}