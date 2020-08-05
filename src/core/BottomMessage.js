import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export class BottomMessage extends Component {
    render() {
        return (
            <View style={styles.messageView}>
            <Text style={styles.message}>{this.props.message}</Text>
          </View>
              );
    }
}
const styles = StyleSheet.create({
    messageView: {
        width: null,
       // backgroundColor: '#bf6a4d',
       backgroundColor: '#465866',
        height: 40,
        //borderRadius: 20,
        marginBottom: 7,
        marginHorizontal: 3,
        justifyContent: 'center',
        alignItems: 'center',

        elevation:8,
        shadowOffset: { width: 20, height: 20 },
        shadowColor: "grey",
        shadowOpacity: 0.8,
        shadowRadius: 20,
        
      },
      message: {
        fontSize: 16,
        color: 'white',
        paddingLeft: 16,
        alignSelf: 'center',
       
      },
})