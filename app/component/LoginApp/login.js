import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    KeyboardAvoidingView
} from 'react-native';
import MyForm from "./MyForm";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../images/bmilogo.png')} />
                    <Text style={styles.title}>Smiple Login Text</Text>
                </View>
                <View style={styles.myform}>
                    <MyForm />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#007bb6',
        width: Dimensions.get('window').width
    },
    logoContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: 100,
        width: 150,
    },
    title: {
        marginTop: 10,
        color: '#fff',
    },
    myform: {
        flex: 1,
    }
})
