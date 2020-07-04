import { SET_LIST, SET_LOADING } from './types';

const initialState = {
	list: [],
	loading: false,
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LIST:
			return {
				...state,
				list: action.users,
			};
		case SET_LOADING:
			return {
				...state,
				loading: action.data,
			};
		default:
			return state;
	}
};

export default usersReducer;
