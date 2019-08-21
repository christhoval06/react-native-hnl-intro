/**
 * @flow
 */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemedComponentProps, ThemeType, withStyles} from 'react-native-ui-kitten/theme';
import {Layout} from 'react-native-ui-kitten/ui';

import FlexStyle from "../../styles/flex";
import ShadowUtils from "../../utils/shadow"

import {CoolAmount} from '../../components';
import {compose} from "recompose";
import {inject, observer} from "mobx-react";

type ComponentProps = {
	title : string;
	amount? : number,
};

export type ShoppingCarProps = ThemedComponentProps & ComponentProps;

class ShoppingCarComponent extends React.Component<ShoppingCarProps> {

	render() : void {
		const {themedStyle, amount} = this.props;
		return (
			<SafeAreaView style={themedStyle.home__container}>
				<Layout style={themedStyle.home__content}>
					<Layout style={themedStyle.home__card}>
						<CoolAmount amount={amount} sign="B/." color="black"/>
					</Layout>
				</Layout>
			</SafeAreaView>
		)
	}
}

const ShoppingCar = compose(
	inject(({appStore}) => ({
		amount: appStore.amount,
	})),
	observer
)(ShoppingCarComponent);

export default withStyles(ShoppingCar, (theme : ThemeType) => ({
	home__container: {
		...FlexStyle.flex,
		backgroundColor: theme['background-basic-color-2'],
	},
	home__content  : {
		...FlexStyle.flex,
		...FlexStyle.justify_content_center,
		...FlexStyle.align_items_center,
	},
	home__text     : {
		// fontSize  : 26,
		// fontWeight: 'bold',
	},
	home__card     : {
		...FlexStyle.m_4,
		...ShadowUtils.get(),
		...FlexStyle.justify_content_center,
		// ...FlexStyle.align_items_center,
		width          : 300,
		height         : 200,
		backgroundColor: 'white',
		borderRadius   : 8,
	},
}));
