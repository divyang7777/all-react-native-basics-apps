import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CompoImage from "./CompoImages";

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.column1}>
                    <CompoImage imageSource={require('../../images/661647.png')} />
                </View>
                <View style={styles.column2}>
                    <CompoImage imageSource={require('../../images/papers.co-ad49-one-piece-logo-art-35-3840x2160-4k-wallpaper.jpg')} />
                </View>
                <View style={styles.full}>
                    <CompoImage imageSource={require('../../images/bleach-ichigo-bankai-wallpaper-hd-21496.jpg')} />
                </View>
                <View style={styles.column1}>
                    <CompoImage imageSource={require('../../images/bleach-ichigo-bankai-wallpaper-hd-21496.jpg')} />
                </View>
                <View style={styles.column2}>
                    <CompoImage imageSource={require('../../images/11503.jpg')} />
                </View>
                <View style={styles.full}>
                    <CompoImage imageSource={require('../../images/661647.png')} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#007bb6',
        padding: 5,
    },
    column1: {
        flex: 1,
        padding: 5,
    },
    column2: {
        flex: 2,
        padding: 5,
    },
    full: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    }
})
