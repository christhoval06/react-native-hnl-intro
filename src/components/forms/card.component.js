import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const W = 300;
const H = 200;

const CardComponent = ({ image = null, name = null, id = null, style = {} }) => {
  console.log(name, image, id);
  return (
    <View style={[styles.card__container, style]}>
      <View style={styles.card__info_wrapper}>
        {image && (
          <View style={styles.card__info_content}>
            <Image source={{ uri: image }} style={styles.card__image} />
          </View>
        )}
        {name && (
          <View style={styles.card__info_content}>
            <Text style={styles.card__info_text}>{name}</Text>
          </View>
        )}
      </View>
      {id && (<View style={styles.card__info_id}>
        <Text style={styles.card__info_id__text}>{id}</Text>
      </View>)}
    </View>
  );
};

const styles = StyleSheet.create({
  card__container: {
    width: W,
    height: H,
    backgroundColor: '#CCC',
    borderRadius: 4,
  },
  card__info_wrapper: {
    flexDirection: 'row',
  },
  card__info_content: {
    flex: 1,
    height: H,
    justifyContent: 'center',
    alignItems: 'center',
  },

  card__info_text: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  card__image: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: '#FFF',
  },

  card__info_id: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginRight: -10,
    marginBottom: -10,
  },
  card__info_id__text: {
    fontSize: 12,
    fontWeight: 'bold',
  }
});

export const Card = CardComponent;

export default Card;
