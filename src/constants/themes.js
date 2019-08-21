/**
 * @flow
 * @format
 */
import {dark, light} from '@eva-design/eva';
import {ThemeType} from 'react-native-ui-kitten/theme';


const THEME_LIGHT : string = 'Eva Light';
const THEME_DARK : string = 'Eva Dark';

export type ThemeRegistry = {
	[THEME_LIGHT] : ThemeType;
	[THEME_DARK] : ThemeType;
}

export type ThemeKey = $Keys<typeof ThemeRegistry>;

export const themes : ThemeRegistry = {
	[THEME_LIGHT]: light,
	[THEME_DARK] : dark,
};

export default {
	themes,
	THEME_DARK,
	THEME_LIGHT,
	THEMES: [THEME_LIGHT, THEME_DARK]
}
