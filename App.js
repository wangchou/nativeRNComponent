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
    const region = {
      latitude: 34.746673,
      longitude: 135.3541299,
      latitudeDelta: 0.03,
      longitudeDelta: 0.03,
    };
    return (
      <MapView
        region={region}
        zoomEnabled={false}
        style={{ flex: 1 }}
        onRegionChange={(event)=>{
          const { latitude, longitude } = event.nativeEvent.region;
          alert(`lat=${latitude}, lng=${longitude}`);
        }}
      />
    );
  }
}
