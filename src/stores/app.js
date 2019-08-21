import {types} from 'mobx-state-tree';

import ThemesConfig from "../constants/themes";

const Themes = types.union(...ThemesConfig.THEMES.map(types.literal));

const AppStore = types.model(
	'App',
	{
		theme : types.optional(Themes, ThemesConfig.THEME_DARK),
		amount: types.optional(types.number, 0),
		map   : types.map(types.frozen()),
	})
	.views(self => ({
		get appTheme() {
			return ThemesConfig.themes[self.theme];
		},
	}))
	.actions(self => ({
		changeTheme() : void {
			self.theme = self.theme === ThemesConfig.THEME_DARK ? ThemesConfig.THEME_LIGHT : ThemesConfig.THEME_DARK;
		},
		minus() {
			self.amount -= 1;
		},
		plus() {
			self.amount += 1;
		}

	}));

export default AppStore;
