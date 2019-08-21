/**
 * @flow
 */
import React from 'react';
import {Provider as StoreProvider} from 'mobx-react';

import ThemeProvider from './components/themeProvider';

import Router from "./navigation/routes";
import appStore from './stores';

export default () => (
	<StoreProvider appStore={appStore}>
		<ThemeProvider>
			<Router/>
		</ThemeProvider>
	</StoreProvider>
);
