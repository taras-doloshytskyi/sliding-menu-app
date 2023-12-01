import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const headerImg = require('../assets/header.png');

export default function Header() {

  return (
    <View style={styles.container}>
      <Image source={headerImg} style={styles.image} resizeMode='cover'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 16 / 9,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});