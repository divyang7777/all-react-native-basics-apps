import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
    Image
} from 'react-native';


export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView>
                <View  style={styles.bigView}>
                    <View style={styles.smallView}>
                        <Image
                            source={require('../../images/tom_hardy_as_venom_4k_8k-7680x4320.jpg')}
                            style={styles.myImage}
                        />
                    </View>
                    <View style={styles.smallView}>
                        <Image
                            source={require('../../images/tom_hardy_as_venom_4k_8k-7680x4320.jpg')}
                            style={styles.myImage}
                        />
                    </View>
                    <View style={styles.smallView}>
                        <Image
                            source={require('../../images/tom_hardy_as_venom_4k_8k-7680x4320.jpg')}
                            style={styles.myImage}
                        />
                    </View>
                    <View style={styles.smallView}>
                        <Image
                            source={require('../../images/tom_hardy_as_venom_4k_8k-7680x4320.jpg')}
                            style={styles.myImage}
                        />
                    </View>
                    <View style={styles.smallView}>
                        <Image
                            source={require('../../images/tom_hardy_as_venom_4k_8k-7680x4320.jpg')}
                            style={styles.myImage}
                        />
                    </View>
                    <View style={styles.smallView}>
                        <Image
                            source={require('../../images/tom_hardy_as_venom_4k_8k-7680x4320.jpg')}
                            style={styles.myImage}
                        />
                    </View>
                    <View style={styles.smallView}>
                        <Image
                            source={require('../../images/tom_hardy_as_venom_4k_8k-7680x4320.jpg')}
                            style={styles.myImage}
                        />
                    </View>
                    <View style={styles.smallView}>
                        <Image
                            source={require('../../images/tom_hardy_as_venom_4k_8k-7680x4320.jpg')}
                            style={styles.myImage}
                        />
                    </View>
                    <View style={styles.smallView}>
                        <Image
                            source={require('../../images/tom_hardy_as_venom_4k_8k-7680x4320.jpg')}
                            style={styles.myImage}
                        />
                    </View>
                    <View style={styles.smallView}>
                        <Image
                            source={require('../../images/tom_hardy_as_venom_4k_8k-7680x4320.jpg')}
                            style={styles.myImage}
                        />
                    </View>
                    <View style={styles.smallView}>
                        <Image
                            source={require('../../images/tom_hardy_as_venom_4k_8k-7680x4320.jpg')}
                            style={styles.myImage}
                        />
                    </View>
                    <View style={styles.smallView}>
                        <Image
                            source={require('../../images/tom_hardy_as_venom_4k_8k-7680x4320.jpg')}
                            style={styles.myImage}
                        />
                    </View>
                    <View style={styles.smallView}>
                        <Image
                            source={require('../../images/tom_hardy_as_venom_4k_8k-7680x4320.jpg')}
                            style={styles.myImage}
                        />
                    </View>
                    <View style={styles.smallView}>
                        <Image
                            source={require('../../images/tom_hardy_as_venom_4k_8k-7680x4320.jpg')}
                            style={styles.myImage}
                        />
                    </View>
                    <View style={styles.smallView}>
                        <Image
                            source={require('../../images/tom_hardy_as_venom_4k_8k-7680x4320.jpg')}
                            style={styles.myImage}
                        />
                    </View>
                    <View style={styles.smallView}>
                        <Image
                            source={require('../../images/tom_hardy_as_venom_4k_8k-7680x4320.jpg')}
                            style={styles.myImage}
                        />
                    </View>
                    <View style={styles.smallView}>
                        <Image
                            source={require('../../images/tom_hardy_as_venom_4k_8k-7680x4320.jpg')}
                            style={styles.myImage}
                        />
                    </View>
                    <View style={styles.smallView}>
                        <Image
                            source={require('../../images/tom_hardy_as_venom_4k_8k-7680x4320.jpg')}
                            style={styles.myImage}
                        />
                    </View>
                    <View style={styles.smallView}>
                        <Image
                            source={require('../../images/tom_hardy_as_venom_4k_8k-7680x4320.jpg')}
                            style={styles.myImage}
                        />
                    </View>
                    <View style={styles.smallView}>
                        <Image
                            source={require('../../images/tom_hardy_as_venom_4k_8k-7680x4320.jpg')}
                            style={styles.myImage}
                        />
                    </View>
                    <View style={styles.smallView}>
                        <Image
                            source={require('../../images/tom_hardy_as_venom_4k_8k-7680x4320.jpg')}
                            style={styles.myImage}
                        />
                    </View>
                    <View style={styles.smallView}>
                        <Image
                            source={require('../../images/tom_hardy_as_venom_4k_8k-7680x4320.jpg')}
                            style={styles.myImage}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    bigView: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    smallView: {
        margin: 2,
        height: 100,
        width: (Dimensions.get('window').width / 2) - 4,
    },
    myImage: {
        flex: 1,
        width: null,
    }
})
