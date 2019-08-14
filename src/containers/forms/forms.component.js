/**
 * @flow
 */
import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Button, Card, Input } from '../../components';
import { Person } from '../../assets';


type State = {
  loading: boolean;
  name: string;
  id: string;
};

type FormsComponentProps = {
  onSubmmit: (string, string) => void;
};

export default class FormsComponent extends React.Component<FormsComponentProps, State> {

  state = {
    loading: false,
    name: null,
    id: null,
  };

  onChangeTextHandler = name => text => {
    this.setState({ [name]: text });
  };

  onSubmmit = () => {
    const { onSubmmit } = this.props;
    const { name, id } = this.state;
    console.log(((name || '').length < 3 && (id || '').length < 6));
    if ((name || '').length < 3 && (id || '').length < 6) {
      return false;
    }


    onSubmmit && onSubmmit(name, id);
  }


  render(): React$Node {
    const { name, id } = this.state;

    return (
      <React.Fragment>
        <View style={styles.forms__container}>
          <View style={styles.forms__card_wrapper}>
            <Card />
          </View>
          <View style={styles.forms__info_wrapper}>

            <Input style={styles.forms__info_field}
              icon={Person}
              iconColor='blue'
              value={id}
              onChangeText={this.onChangeTextHandler('id')} />
            <Input style={styles.forms__info_field}
              icon={Person}
              iconColor='purple'
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