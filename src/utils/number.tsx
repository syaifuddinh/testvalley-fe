export function toCurrency(number) {
	let currencyString = number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
	currencyString = currencyString.replace("$", "")
	currencyString = currencyString.replace(".00", "")

	return currencyString
}