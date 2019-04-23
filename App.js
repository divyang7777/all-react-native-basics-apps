import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import NavBar from "./app/component/YoutubeClone/NavBar";
import TabBar from "./app/component/YoutubeClone/TabBar";
import Body from "./app/component/YoutubeClone/body";
import data from './app/component/YoutubeClone/search.json'

export default class FlexBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar />
        <ScrollView>
          <Body video={data.items[0]} />
        </ScrollView>
        <TabBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 50,
  }
})
