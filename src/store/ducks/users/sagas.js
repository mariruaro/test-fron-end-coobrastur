/* eslint-disable no-alert */
import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from './types';
import * as actions from './actions';
import * as users from '../../../api/users';

export function* getList() {
	yield put(actions.setLoading(true));

	try {
		const response = yield call(users.get);

		yield put(actions.setList(response.data.data));
	} catch {
		alert('Erro ao buscar usuários');
	}

	yield put(actions.setLoading(false));
}

export function* registerUser(payload) {
	yield put(actions.setLoading(true));

	const { user } = payload;

	try {
		const response = yield call(users.register, user);

		if (response) {
			window.location.href = '/';
		}
	} catch {
		alert('Erro ao cadastrar usuários');
	}

	yield put(actions.setLoading(false));
}

export default function* watchUsers() {
	yield takeLatest(types.GET_LIST, getList);
	yield takeLatest(types.REGISTER_USER, registerUser);
}
