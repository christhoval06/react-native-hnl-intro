/**
 * @format
 * @flow
 */

import React from 'react';
import {compose} from 'recompose';
import {inject, observer} from 'mobx-react';
import {mapping} from '@eva-design/eva';
import {ThemeType} from 'react-native-ui-kitten/theme';
import {ApplicationProvider} from 'react-native-ui-kitten';

import ThemesConfig from '../constants/themes';

type ThemeProviderProps = {
	currentTheme : ThemeType,
	children : React.ReactNode
};

class ThemeProvider extends React.Component<ThemeProviderProps> {

	static  defaultProps : ThemeProviderProps = {
		currentTheme: ThemesConfig.THEME_DARK
	};

	render() : React.ReactElement<ThemeProviderProps> {
		const {currentTheme, children} : ThemeProviderProps = this.props;
		return (
			<ApplicationProvider
				mapping={mapping}
				theme={currentTheme}>

				{children}

			</ApplicationProvider>)
	}
}

const ThemeProviderComposed = compose(
	inject(({appStore}) => ({
		currentTheme: appStore.appTheme,
	})),
	observer
)(ThemeProvider);

export default ThemeProviderComposed;
