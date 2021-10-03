import { combineReducers } from 'redux';
import transactionsReducer from './transactionsReducer';
import paginationReducer from './paginationReducer';

const reducers = combineReducers({
  transactionsReducer,
  paginationReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
