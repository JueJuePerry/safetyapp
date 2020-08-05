import React, { Component } from 'react';
import { Input } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export class CustomInput extends Component {
    render() {
        const { type, placeholderText, inputValue, onChangeMethod, iconname, disable } = this.props;
        return (
            <Input
            disabled={disable}
    keyboardType={type}
    style={styles.input}
      placeholder={placeholderText}
      value={inputValue}
      onChangeText={onChangeMethod}
      leftIcon={
      <Icon
      name={iconname}
      size={24}
    //  color='#494a4d'
    color='#a85232'
    />
      }
      inputStyle={styles.input2}
      inputContainerStyle={styles.inputContainer}
    />
              );
    }
}


const styles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: 'lightgray'
  },
  input: {
    marginBottom: -13
  },
  input2:{
    fontSize: 16,
    marginBottom: 0
  },
})