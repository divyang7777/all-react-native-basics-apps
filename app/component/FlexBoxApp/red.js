import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class RedBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
    }
})
