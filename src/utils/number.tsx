export function toCurrency(number: string|number) {
	let numberSample: string|number;
	if(typeof number === "number") numberSample = number.toString()
	numberSample = number
	let currencyString = numberSample.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
	currencyString = currencyString.replace("$", "")
	currencyString = currencyString.replace(".00", "")

	return currencyString
}