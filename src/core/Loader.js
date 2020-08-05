import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator, Text
} from 'react-native';

export class Loader extends Component{
render(){
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={this.props.loading}
      onRequestClose={() => {console.log('close modal')}}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator size="large" color="#c23525"
            animating={this.props.loading} />
            <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </View>
    </Modal>
  )
}
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    backgroundColor: '#f5efed',
    height: 100,
    width: 120,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  text: {
      color: 'gray',
      padding: 0,
      marginTop: -20
  }
});
