import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from "./app/component/shoppingCartApp/header";
import HeroImage from "./app/component/shoppingCartApp/HeroImage";
import Body from "./app/component/shoppingCartApp/body";


export default class FlexBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Header />
        <HeroImage />
        <Body />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#00aced',
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 50,
  }
})
