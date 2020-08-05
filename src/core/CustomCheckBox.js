import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export class CustomCheckBox extends Component {
    render() {
        const { title, checked, onCheckChange, no } = this.props;
        return (
          <CheckBox
              title={title}
              checkedIcon={<Icon name="checkbox-marked-outline" style={styles.checkbox}></Icon>}
             uncheckedIcon={<Icon name="checkbox-blank-outline" style={styles.checkbox}></Icon>}
              checked={checked}
              containerStyle={[styles.checkView, { marginBottom: no }]}
              onPress={onCheckChange}
            />
              );
    }
}


const styles = StyleSheet.create({
  checkbox: {
    fontSize: 28
  },
  checkView: {
    width: 230, 
    padding: 5,
    //marginBottom: 30
  },
})