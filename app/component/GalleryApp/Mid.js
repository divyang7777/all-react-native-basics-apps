import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Mid extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.mid}>
                <View style={[styles.outterView, styles.leftBar]}>
                    <Text style={styles.textOne}>75 +</Text>
                    <Text style={styles.textTwo}>Images</Text>
                </View>
                <View style={styles.outterView}>
                    <Text style={styles.textOne}>100 +</Text>
                    <Text style={styles.textTwo}>Subscribers</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mid: {
        // flex: 1,
        flexDirection: 'row',
        backgroundColor: '#CF000F',
        borderTopWidth: 8,
        borderTopColor: '#fff'
    },
    outterView: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    textOne: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    textTwo: {
        color: '#fff',
        fontSize: 14,
        marginTop: 5,
    },
    leftBar: {
        borderRightWidth: 4,
        borderRightColor: '#fff',
    }
})