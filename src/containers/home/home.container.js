/**
 * @flow
 */
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native';

import {ROUTE_OTHER_ROUTE} from '../../navigation/constants';

import HomeComponent from './home.component';

type State = {
  clicked: number;
  title: string;
};
type HomeContainerProps = {
};

export default class HomeContainer extends React.Component<HomeContainerProps, State> {

  constructor(props){
    super(props);
    const { navigation } = props;
    
    this.state = {
      title: navigation.getParam('title'),
    }

  }

  onPress = (): void => {
    const { navigation } = this.props;
    navigation.navigate(ROUTE_OTHER_ROUTE, {title: 'Other Route'})
  };

  render(): void {
    const { title } = this.state;
    return (
      <SafeAreaView style={styles.home__container}>
        <HomeComponent onPress={this.onPress} title={title} />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  home__container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});