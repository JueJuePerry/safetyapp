import React, { Component } from 'react';
import { Text } from 'react-native';

export class RVText extends Component {
    render() {
        const { content, style } = this.props;
        return (
            <Text style={[ style, { fontSize: 40 }]}>{content}</Text>
              );
    }
}