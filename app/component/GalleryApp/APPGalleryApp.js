import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import GalleryHeader from './app/component/GalleryApp/Galleryheader'
import Mid from './app/component/GalleryApp/Mid'
import Body from './app/component/GalleryApp/body'

export default class FlexBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <GalleryHeader />
        <Mid />
        <Body />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 50,
  }
})
