import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="userName"
                    style={styles.input}
                />
                <TextInput
                    placeholder="password"
                    secureTextEntry={true}
                    style={styles.input}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255, 0.8)',
        paddingLeft: 10,
        marginBottom: 20,
    },
    buttonContainer: {
        backgroundColor: '#df2e90',
        paddingVertical: 15,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
    },
})
