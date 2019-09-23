import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'sort',
	pure: false
})
export class SortPipe implements PipeTransform {
	transform(value: any, propName: string) {
		if (value.length === 0) {
			return value
		}

		let sortArray = (a, b) => {
			if (a[propName] > b[propName]) {
				return 1;
			} else if (a[propName] < b[propName]) {
				return -1;
			} else if (a[propName] == b[propName]) {
				return 0;
			}
		}

		return value.sort(sortArray);
	}

}
