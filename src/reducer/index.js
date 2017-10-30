import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import userForm from './userForm'

export default combineReducers({
	count: counterReducer,
	user: userForm,
	articles
})