import api from './api';

export const get = () => api.get('/users');

export const register = (user) => api.post('/users', user);
