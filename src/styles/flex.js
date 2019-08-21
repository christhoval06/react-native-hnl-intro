import {StyleSheet} from "react-native";

const SPACER = 5;

const getKey = (attr) => {
	let key = attr.split('-');
	return key.length > 1 ? key[1] : attr;
};

const prefix = '';

export default StyleSheet.create({
	[`${prefix}flex`]: {
		flex: 1
	},
	...['row', 'column'].reduce((s, d) => ({
		...s,
		...[d, `${d}-reverse`].reduce((ss, v) => ({
			...ss,
			[`${prefix}flex_${getKey(v)}`]: {flexDirection: v}
		}), {})
	}), {}),

	...["flex-start", "flex-end", "center", "space-between", "space-around", "stretch", 'baseline'].reduce((s, d) => ({
		...s,
		...(() => {
			const key = getKey(d);
			switch (key) {
				case 'between':
					return {
						[`${prefix}justify_content_${key}`]: {justifyContent: d},
					};
				case 'around':
					return {
						[`${prefix}justify_content_${key}`]: {justifyContent: d},
						[`${prefix}align_content_${key}`]  : {alignContent: d},
					};
				case 'stretch':
					return {
						[`${prefix}align_content_${key}`]: {alignContent: d},
						[`${prefix}align_items_${key}`]  : {alignItems: d},
						[`${prefix}align_self_${key}`]   : {alignSelf: d},
					};
				case 'baseline':
					return {
						[`${prefix}align_items_${key}`]: {alignItems: d},
						[`${prefix}align_self_${key}`] : {alignSelf: d},
					};
				default:
					return {
						[`${prefix}justify_content_${key}`]: {justifyContent: d},
						[`${prefix}align_content_${key}`]  : {alignContent: d},
						[`${prefix}align_items_${key}`]    : {alignItems: d},
						[`${prefix} ${key}`]               : {alignSelf: d},
					}
			}
		})()
	}), {}),
	...['m', 'p'].reduce((s, d) => ({
		...s,
		...[0, .25, .5, 1, 1.5, 3].reduce((ss, v, i) => ({
			...ss,
			[`${prefix}${d}_${i}`]: {[d === 'm' ? 'margin' : 'padding']: SPACER * v},
		}), {})
	}), {}),
})
