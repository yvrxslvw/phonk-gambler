export const duplicates = (array: string[]): boolean => {
	const entries = array.filter((value, index) => array.indexOf(value) !== index);
	return entries.length > 0;
};
