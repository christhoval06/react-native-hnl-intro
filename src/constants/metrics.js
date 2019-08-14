import {Dimensions, Platform} from 'react-native';

const IS_ANDROID = Platform.OS === 'android';
const {height, width} = Dimensions.get('window');

function wp(percentage) {
	const value = (percentage * width) / 100;
	return Math.round(value);
}

export default {
	ANDROID_STATUSBAR: 24,
	DEVICE_HEIGHT    : IS_ANDROID ? height - 24 : height,
	DEVICE_WIDTH     : width,
}
