import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';

export default class GalleryHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ImageBackground
                style={styles.headerbg}
                source={require('../../images/661647.png')}
            >
                <View style={styles.headerContainer}>
                    <View style={styles.profilePicContainer}>
                        <Image style={styles.myPic} source={require('../../images/adorable-animal-blur-406014.jpg')} />
                    </View>
                    <Text style={styles.nameText}>
                        Root Node !
                    </Text>
                    <Text style={styles.linerText}>
                        Just to say here, learning React-Native !
                    </Text>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    headerbg: {
        // flex: 1,
        width: null,
        alignSelf: 'stretch',
    },
    headerContainer: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    profilePicContainer: {
        width: 180,
        height: 180,
        borderRadius: 100,
        borderWidth: 15,
        borderColor: 'rgba(0,0,0,0.4)',
    },
    myPic: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        borderRadius: 90,
        borderWidth: 3,
        borderColor: '#fff',
    },
    nameText: {
        marginTop: 18,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    linerText: {
        color: '#fff',
        fontSize: 15,
        marginTop: 8,
        fontStyle: 'italic',
        fontWeight: 'normal',
    }
})
