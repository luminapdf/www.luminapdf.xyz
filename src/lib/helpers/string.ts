export const getInitials = (name?: string) => {
	if (!name) {
		return '';
	}

	const words = name.split(' ');
	const initials = words.map((word) => word.charAt(0).toUpperCase());
	return initials.join('');
};

export const copyToClipboard = async (text: string) => {
	await navigator.clipboard.writeText(text);
};
