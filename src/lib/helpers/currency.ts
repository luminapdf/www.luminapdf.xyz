export const formatCurrency = (value: number) => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 3,
		maximumFractionDigits: 3
	}).format(value);
};

export const centsToDollars = (value: number) => {
	return value / 100;
};
