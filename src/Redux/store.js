import { createStore, applyMiddleware } from 'redux';
import { reducers } from './reducer/root'
import { createLogger } from 'redux-logger'

const logger = createLogger({
  diff: true,
  collapsed: true,
})

export const store = createStore(
  reducers,
  applyMiddleware(logger)
)