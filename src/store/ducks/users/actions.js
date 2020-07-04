import * as types from './types';

export const getList = () => ({
	type: types.GET_LIST,
});

export const setList = (users) => ({
	type: types.SET_LIST,
	users,
});

export const setLoading = (data) => ({
	type: types.SET_LOADING,
	data,
});

export const registerUser = (user) => ({
	type: types.REGISTER_USER,
	user,
});

export default {
	getList,
	setList,
	setLoading,
	registerUser,
};
