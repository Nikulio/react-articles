import {CHANGE_USER} from '../constants';


export default (user = 0, action) => {
	const {type, payload} = action;

	switch (type) {
		case CHANGE_USER :
			return user = payload.value
	}
	return user
}