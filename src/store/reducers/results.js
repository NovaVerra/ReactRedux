import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
	results: []
}

const deleteResult = (state, action) => {
	const newArray = state.results.filter(res => res.id !== action.resultElId)
	return updateObject(state, {results: newArray})
}

const resultsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.STORE_RESULT : return updateObject(state, {results: state.results.concat({id: new Date(), value: action.val})})
		case actionTypes.DELETE_RESULT : return deleteResult(state, action)
	}
	return state
}

export default resultsReducer
