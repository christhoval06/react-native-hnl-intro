/**
 * @flow
 */
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native';

import { ROUTE_OTHER_ROUTE } from '../../navigation/constants';

import FormsComponent from './forms.component';

type FormsContainerProps = {
};

export default class FormsContainer extends React.Component<FormsContainerProps> {

  onSubmit = (id: string, name: string): void => {
    console.warn('name', name, 'id', id);
  };

  render(): React$Node {
    return (
      <SafeAreaView style={styles.forms__container}>
        <FormsComponent onSubmmit={this.onSubmit} />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  forms__container: {
    flex: 1,
  },
});