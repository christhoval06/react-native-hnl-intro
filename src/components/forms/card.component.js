import React from 'react';
import { View, StyleSheet } from 'react-native';

const W = 300;
const H = 200;

const CardComponent = (props) => (
  <View style={styles.card__container}>
  </View>
);

const styles = StyleSheet.create({
  card__container: {
    width: W,
    height: H,
    backgroundColor: 'blue',
    borderRadius: 4,
  },
});

export const Card = CardComponent;

export default Card;
