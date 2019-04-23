import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class HeroText extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text style={styles.headerText}> Header Text with Elevation </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {

    },
    headerText: {
        elevation: 1,
        alignSelf: 'center',
        fontSize: 25,
        color: '#292929',
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 255 , 0.7)',
        padding: 10,
        fontWeight: 'bold'
    }
})
