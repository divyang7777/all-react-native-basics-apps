import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.header}>
                <Image
                    source={require('../../images/bmilogo.png')}
                    style={styles.logo}
                />
                <Text style={styles.title}>Shopping Cart</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: '#fff',
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderBottomWidth: 4,
        borderColor: '#ccc',
        width: Dimensions.get('window').width
    },
    logo: {
        width: 60,
        height: 40,
        marginTop: 20,
    },
    title: {
        marginTop: 20,
        marginLeft: 10,
        color: '#000',
        fontWeight: 'bold',
        fontSize: 15,
         
    }
})
