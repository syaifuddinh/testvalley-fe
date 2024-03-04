export function toCurrency(number: string|number) {
	if(typeof number === "number") number = number.toString()
	let currencyString = number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
	currencyString = currencyString.replace("$", "")
	currencyString = currencyString.replace(".00", "")

	return currencyString
}