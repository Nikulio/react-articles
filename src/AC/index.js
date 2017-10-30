import {CHANGE_USER, DELETE_ARTICLE, INCREMENT} from '../constants';

export function increment() {
	return {
		type: INCREMENT
	}
}

export function deleteArticle(id) {
	return {
		type: DELETE_ARTICLE,
		payload: {id}
	}
}

export function changeUser(value) {
	return {
		type: CHANGE_USER,
		payload: {value}
	}
}