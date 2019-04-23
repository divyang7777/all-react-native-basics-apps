import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import HeroText from "./HeroText";


export default class HeroImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ImageBackground
                source={require('../../images/adorable-animal-blur-406014.jpg')}
                style={styles.hero}
            >
            <HeroText></HeroText>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    hero: {
        height: 200,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})