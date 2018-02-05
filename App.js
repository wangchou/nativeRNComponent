/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  requireNativeComponent
} from 'react-native';

const MapView = requireNativeComponent('RNTMap', null);

export default class App extends Component<{}> {
  render() {
    return (
      <MapView zoomEnabled={false} style={{ flex: 1 }} />
    );
  }
}
