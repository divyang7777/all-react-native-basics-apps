import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.navBar}>
                <Image
                    style={styles.logo}
                    source={require('../../images/youtube.png')}
                />
                <View style={styles.moveRight}>
                    <TouchableOpacity>
                        <Icon name="search" size={27} style={styles.icons} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="account-circle" size={27} style={styles.icons} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    navBar: {
        // marginTop: 20,
        height: 55,
        backgroundColor: '#fff',
        elevation: 3,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        width: 120,
        height: 23,
    },
    moveRight: {
        flexDirection: 'row',
    },
    icons: {
        padding: 5,
        marginLeft: 10,
    }
})
