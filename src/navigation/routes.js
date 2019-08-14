import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  NavigationContainer,
  NavigationRouteConfigMap,
} from 'react-navigation';

import Constants from './constants';

import HomeContainer from '../containers/home/home.container';
import FormsContainer from '../containers/forms/forms.container';


const Screens: NavigationRouteConfigMap = {
  [Constants.ROUTE_HOME]: {
    screen: HomeContainer,
    navigationOptions: {
      title: 'Home',
    }
  },
  [Constants.ROUTE_OTHER_ROUTE]: {
    screen: HomeContainer,
    navigationOptions: {
      title: 'Other Route',
    }
  },
  [Constants.ROUTE_FORMS]: {
    screen: FormsContainer,
    navigationOptions: {
      title: 'ID Information',
    }
  }
};

const AppNavigator: NavigationContainer = createStackNavigator({
  ...Screens,
}, {
    initialRouteName: Constants.ROUTE_FORMS,
    headerMode: 'screen',
    defaultNavigationOptions: {
      // header: null,
    },
  });

  export default createAppContainer(AppNavigator);


/*
const a = { a: 1, b: 2 };
const b = { a: 2 };

let c = Object.assign(a, b);
c = { ...a, ...b };
const { a, b } = a;

function sum(a, b) {
  return a + b;
}

function multiply(a, b, ...c) {
  return a + b;
}

sum(...a);

multiply(...[2, 4, 2, 4, 5, 6])

*/