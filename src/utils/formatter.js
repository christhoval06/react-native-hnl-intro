/**
 * @flow
 */

export const decimal = (number : number | string, n : number, x : number, s : string, c : string) : string => {
	let num : string = number.toString().replace(',', '');

	if (isNaN(Number(num))) return null;

	const re : string = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')';
	num = Number(num).toFixed(Math.max(0, ~~n));
	return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s));
};

export default {
	decimal,
}
