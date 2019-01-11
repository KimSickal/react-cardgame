export function shuffle<T>(array: T[]): T[] {
	Array.from(Array(array.length)).map((_1, i) => {
		const rand = Math.floor(Math.random() * i);
		const temp = array[i];
		array[i] = array[rand];
		array[rand] = temp;
	});
	return array;
}
