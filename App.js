import React, { Component } from 'react';
import Routes from './Routes.js';

import Icon from 'react-native-vector-icons/MaterialIcons'

Icon.loadFont();



export default class App extends Component {
  render() {

    return <Routes/>

  }
}
