/**
 * @flow
 */
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native';
import { Button } from '../../components';

type HomeComponentProps = {
  onPress: () => void;
  title: string;
};

export default class HomeComponent extends React.Component<HomeComponentProps> {

  render(): void {
    const { onPress, title } = this.props;
    return (
      <React.Fragment>
        <Text style={styles.home__text}>{title}</Text>
        <Button onPress={onPress}>Move to Other Route</Button>
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  home__text: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
  }
});