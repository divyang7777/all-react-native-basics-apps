import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';

export default class Horizontal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView horizontal={true} pagingEnabled={true} style={styles.container}>
                <View style={styles.outer}>
                    <Text style={styles.innerText}> Welcome to OK. NAHH .. !?</Text>
                </View>
                <View style={[styles.outer, styles.red]}>
                    <Text style={styles.innerText}> Just Trying the CSS-style with </Text>
                </View>
                <View style={[styles.outer, styles.green]}>
                    <Text style={styles.innerText}> the Scroll-view YO !!!</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    outer: {
        backgroundColor: '#007bb6',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    innerText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
    },
    red: {
        backgroundColor: '#dd4b39',
    },
    green: {
        backgroundColor: '#27ae60',
    }

})