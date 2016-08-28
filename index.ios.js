/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

import Periodic from './Periodic'

export default class periodic extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableHighlight
          style={{ marginBottom: 50 }}
          onPress={() => this.setState({ periodic: this.refs.periodic.state })}>
          <Text
            style={{
              color: 'green'
            }}>
            print state
          </Text>
        </TouchableHighlight>
        <Text
          style={{ marginBottom: 50}}>
          {
            JSON.stringify(this.state.periodic, null, 2)
          }
        </Text>
        <Periodic
          ref="periodic"
          {...this.props}
          />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 100,
  },
});

AppRegistry.registerComponent('periodic', () => periodic);
