/**
 * @flow
 * @format
 */

import React from 'react';
import {NavigationScreenProps} from "react-navigation";

import {Person} from '../../assets/icons';

import {Header, HeaderProps} from '../common';

interface ComponentProps {
}

export type ShopppingCarHeaderProps = HeaderProps & ComponentProps & NavigationScreenProps;

class ShopppingCarHeaderComponent extends React.Component<ShopppingCarHeaderProps> {

	render() : React.ReactNode {
		return (
			<Header
				{...this.props}
				rightIcon={Person}
				leftIcon={Person}
			/>
		);
	}
}

export const ShopppingCarHeader = ShopppingCarHeaderComponent;

export default ShopppingCarHeader;
