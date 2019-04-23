import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class TabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.tabBar}>
                <TouchableOpacity style={styles.container}>
                    <Icon
                        name="home" size={25}
                    />
                    <Text style={styles.myText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}>
                    <Icon
                        name="whatshot" size={25}
                    />
                    <Text style={styles.myText}>Trending</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}>
                    <Icon
                        name="subscriptions" size={25}
                    />
                    <Text style={styles.myText}>Subscription</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}>
                    <Icon
                        name="add-alert" size={25}
                    />
                    <Text style={styles.myText}>Alert</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#fff',
        height: 60,
        borderTopWidth: 2,
        borderColor: '#e5e5e5',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    container: {
        alignItems: 'center',
        margin: 10,
        justifyContent: 'center',
    },
    myText: {
        fontSize: 14,
        textAlign: 'center',
        paddingTop: 2,
        color: 'rgb(50,50,50)',
    }
})
