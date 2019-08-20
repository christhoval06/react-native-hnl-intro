/**
 * @flow
 */
import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import Libs from '../../libs';

import { Button, Card, Input } from '../../components';
import { Person } from '../../assets';

type Pokemon = {
  id: number;
  name: string;
  image: string;
};

type State = {
  loading: boolean;
  name: string;
  info: Pokemon;
};

type FormsComponentProps = {
  onSubmmit: (string) => void;
};

export default class FormsComponent extends React.Component<FormsComponentProps, State> {

  state = {
    loading: false,
    name: null,
    info: null,
  };

  onChangeTextHandler = name => text => {
    this.setState({ [name]: text });
  };

  onSubmmit = () => {
    const { onSubmmit } = this.props;
    const { name } = this.state;
    if ((name || '').length < 3) {
      return false;
    }

    this.setState({ loading: true });

    Libs.pokemon(name)
      .then((res) => {
        this.setState({
          info: {
            name: res['name'],
            id: res['id'],
            image: res['sprites']['front_default'],
          },
          loading: false
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  }


  render(): React$Node {
    const { name, loading, info } = this.state;
    return (
      <React.Fragment>
        <View style={styles.forms__container}>
          <View style={styles.forms__card_wrapper}>
            <Card {...info} />
          </View>
          <View style={styles.forms__info_wrapper}>

            <Input style={styles.forms__info_field}
              icon={Person}
              iconColor='blue'
              value={name}
              onChangeText={this.onChangeTextHandler('name')} />
          </View>
        </View>
        <View style={styles.forms__footer}>
          <Button onPress={this.onSubmmit}>Save</Button>
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
    paddingHorizontal: 20
  },

  forms__info_field: {
    marginTop: 5,
  },

  forms__footer: {
    padding: 5,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },

});