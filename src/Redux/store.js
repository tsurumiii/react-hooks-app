import { createStore } from 'redux';
import { reducers } from './reducer/root'

export const store = createStore(reducers)