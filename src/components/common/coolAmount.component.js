/**
 * @flow
 */

import React from 'react';
import {Text} from 'react-native';

import Formatter from '../../utils/formatter';
import {ThemedComponentProps, ThemeType, withStyles} from 'react-native-ui-kitten';
import FlexStyle from '../../styles/flex';

type ComponentProps = {
	amount : string | number,
	color? : string,
	scale? : number,
	sign? : string
};

export type CoolAmountProps = ThemedComponentProps & ComponentProps;

class CoolAmountComponent extends React.PureComponent<CoolAmountProps> {

	static defaultProps = {
		scale: 1,
		sign : '$',
		color: 'white',
		size : 50,
	};

	render() {
		const {themedStyle, amount, color, scale, sign, size, style, ...props} = this.props;
		const amountFormated = Formatter.decimal(amount, 2, 3, ',', '.').toString().split('.');

		return (
			<Text style={[themedStyle.balance__amount, {color: color || style.color}, style]}>
				<Text style={[themedStyle.balance__sign, {fontSize: 30 * scale}]}>{sign}</Text>
				<Text style={[themedStyle.balance__number, {fontSize: size * scale}]}>{amountFormated[0]}</Text>
				<Text style={[themedStyle.balance__decimals, {fontSize: 32 * scale}]}>{`.${amountFormated[1]}`}</Text>
			</Text>
		);
	}
}

export const CoolAmount = withStyles(CoolAmountComponent, (theme : ThemeType) => (
	{
		balance__amount  : {
			...FlexStyle.align_self_center,
			alignSelf : 'center',
			fontSize  : 70,
			fontWeight: '900',
		},
		balance__sign    : {
			fontSize        : 30,
			fontWeight      : '100',
			marginHorizontal: 3,
			paddingVertical : 5,
			position        : 'absolute',
			top             : -20,
		},
		balance__number  : {
			fontWeight: 'bold',
		},
		balance__decimals: {
			fontSize  : 32,
			fontWeight: '300',
		},
	}
));

export default CoolAmount;
