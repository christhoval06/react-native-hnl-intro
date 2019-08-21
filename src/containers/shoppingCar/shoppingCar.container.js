/**
 * @flow
 */
import React from 'react';
import {inject, observer} from 'mobx-react'
import {NavigationScreenConfig, NavigationScreenProps} from "react-navigation";
import {TopNavigationElement} from "react-native-ui-kitten";
import {compose} from 'recompose';

import {ShopppingCarHeader} from '../../components/shoppingCar'
import ShoppingCarComponent from './shoppingCar.component';

type State = {
	clicked : number;
	title : string;
};

interface ShoppingCarNavigationStateParams {
	onRight : () => void;
}

type ShoppingCarContainerProps = {
	changeTheme : ()=>void;
	minus : ()=>void;
	plus : ()=>void;
};

class ShoppingCarContainer extends React.Component<ShoppingCarContainerProps, State> {

	static navigationOptions : NavigationScreenConfig<any> = ({navigation, screenProps}) => {
		const shoppingCarHeaderConfig : ShoppingCarNavigationStateParams = {
			onRight: navigation.getParam('onRight'),
			onLeft : navigation.getParam('onLeft'),
		};

		const renderHeader = (headerProps : NavigationScreenProps, config : ShoppingCarNavigationStateParams) => {
			const {scene} = headerProps;
			const options = scene.descriptor.options;
			return (
				<ShopppingCarHeader
					title={options.title}
					{...config}/>
			);
		};

		return {
			...navigation,
			...screenProps,
			header: (headerProps : NavigationScreenProps) : TopNavigationElement => renderHeader(headerProps, shoppingCarHeaderConfig),
		};
	};

	constructor(props) {
		super(props);
		const {navigation, minus, plus} = props;

		navigation.setParams({
			onRight: plus,
			onLeft : minus,
		});

	}

	onPress = () : void => {
		const {changeTheme} = this.props;
		// navigation.navigate(ROUTE_OTHER_ROUTE, {title: 'Other Route'})
		changeTheme();
	};

	render() : void {
		return (<ShoppingCarComponent onPress={this.onPress}/>);
	}
}

const ShoppingCar = compose(
	inject(({appStore}) => ({
		changeTheme: appStore.changeTheme,
		minus      : appStore.minus,
		plus       : appStore.plus,
	})),
	observer
)(ShoppingCarContainer);

export default ShoppingCar;
