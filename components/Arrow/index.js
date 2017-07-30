import React from 'react';
import {
  StyleSheet,
  Image
} from 'react-native';
import styles from './styles'
const ArrowImg = require('../../images/arrow.png')

const Arrow = ({ style }) => {
  return <Image source={ArrowImg} style={[styles.arrow, style]} />
};

export default Arrow;
