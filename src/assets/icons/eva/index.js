/**
 * @flow
 * @format
 */

import {ImageStyle, StyleProp,} from 'react-native';
import {Icon, IconElement, IconSource,} from '../icon.component';

export const Person = (style : StyleProp<ImageStyle>) : IconElement => {
	const source : IconSource = {
		imageSource: require('./person-outline.png'),
	};

	return Icon(source, style);
};
