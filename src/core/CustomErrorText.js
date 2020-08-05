import React, { Component } from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';

export class CustomErrorText extends Component {
    render() {
        const { text } = this.props;
        return (
            <Text style={styles.err}>{text}</Text>
              );
    }
}


const styles = StyleSheet.create({
    err: {
        color: '#eb4034',
        marginTop: -22,
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 14
    }
})