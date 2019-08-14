/**
 * @flow
 */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card } from '../../components';

type State = {
  loading: boolean;
  name: string;
  id: string;
};

type FormsComponentProps = {
  onSubmmit: () => void;
};

export default class FormsComponent extends React.Component<FormsComponentProps, State> {

  state = {
    loading: false,
    name: null,
    id: null,
  };


  render(): React$Node {
    const { onSubmmit } = this.props;
    const { name, id } = this.state;

    return (
      <React.Fragment>
        <View style={styles.forms__container}>
          <View style={styles.forms__card_wrapper}>
            <Card />
          </View>
          <View style={styles.forms__info_wrapper}></View>
        </View>
        <View style={styles.forms__footer}>
          <Button onPress={onSubmmit}>Save</Button>
        </View>
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  forms__container: {
    flex: 1,
  },

  forms__card_wrapper: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 10,
    backgroundColor: 'yellow',
  },

  forms__info_wrapper: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'green',
  },

  forms__footer: {
    padding: 5,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});