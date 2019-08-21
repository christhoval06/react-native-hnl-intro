/**
 * @flow
 * @format
 */

import React from 'react';
import {ImageProps, SafeAreaView} from 'react-native';
import {NavigationScreenProps} from "react-navigation";
import {StyleType, ThemedComponentProps, ThemeType, withStyles} from 'react-native-ui-kitten/theme';
import {TopNavigation, TopNavigationAction, TopNavigationActionProps,} from 'react-native-ui-kitten/ui';

import type {IconElement} from "../../assets/icons/icon.component";

interface ComponentProps {
	title : string;
	subtitle? : string;
	onLeft : () => void;
	onRight : () => void;
	leftIcon : IconElement | null;
	rightIcon : IconElement | null;
}

export type HeaderProps = ThemedComponentProps & ComponentProps & NavigationScreenProps;

class HeaderComponent extends React.PureComponent<HeaderProps> {

	onLeft = () : void => {
		this.props.onLeft();
	};

	onRight = () : void => {
		this.props.onRight();
	};

	renderRightIcon = (style : StyleType) : React.ReactElement<ImageProps> => {
		const {rightIcon, themedStyle} = this.props;

		return rightIcon({...style, ...themedStyle.rightIcon});
	};

	renderLeftIcon = (style : StyleType) : React.ReactElement<ImageProps> => {
		const {leftIcon, themedStyle} = this.props;

		return leftIcon({...style, ...themedStyle.leftIcon});
	};

	renderLeftControl = () : React.ReactElement<TopNavigationActionProps> => {
		const {leftIcon} = this.props;
		if (!leftIcon) {
			return null;
		}

		return (
			<TopNavigationAction
				icon={this.renderLeftIcon}
				onPress={this.onLeft}/>
		);
	};

	renderRightControls = () : React.ReactElement<TopNavigationActionProps>[] => {
		const {rightIcon} = this.props;
		if (!rightIcon) {
			return null;
		}

		return ([
			<TopNavigationAction
				icon={this.renderRightIcon}
				onPress={this.onRight}/>,
		]);
	};

	render() : React.ReactNode {
		const {themedStyle, title, subtitle} = this.props;
		return (
			<SafeAreaView style={themedStyle.container}>
				<TopNavigation
					style={themedStyle.container}
					alignment='center'
					title={title}
					subtitle={subtitle}
					leftControl={this.renderLeftControl()}
					rightControls={this.renderRightControls()}
				/>
			</SafeAreaView>
		);
	}
}

export const Header = withStyles(HeaderComponent, (theme : ThemeType) => ({
	container: {
		backgroundColor: theme['background-basic-color-2'],
	},
	leftIcon : {
		tintColor: theme['color-primary-default'],
	},
	rightIcon: {
		tintColor: theme['color-primary-default'],
	},
}));

export default Header;


