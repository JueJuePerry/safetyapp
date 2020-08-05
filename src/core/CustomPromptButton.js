import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';

export class CustomPromptButton extends Component {
    render() {
        const { title, pressButton } = this.props;
        return (
          <Button title={title} buttonStyle={styles.btnCancel} titleStyle={{color: 'white'}} onPress={pressButton} />
              );
    }
}


const styles = StyleSheet.create({
  btnCancel: {
    backgroundColor: '#a85232', 
    marginTop: 20, 
    width: 150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 10
}
})