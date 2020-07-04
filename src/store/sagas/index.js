import { fork } from 'redux-saga/effects';
import watchUsers from '../ducks/users/sagas';

export default function* startForman() {
	yield fork(watchUsers);
}
