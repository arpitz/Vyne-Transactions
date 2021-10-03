import { ActionType } from '../action-types';
import { Action } from '../actions';

interface TransactionsState {
  loading: boolean;
  error: string | null;
  data: {
    items?: []
  }
}

const initialState = {
  loading: false,
  error: null,
  data: {}
};

const reducer = (
  state: TransactionsState = initialState,
  action: Action
): TransactionsState => {
  switch (action.type) {
    case ActionType.FETCH_ALL_TRANSACTIONS:
      return { loading: true, error: null, data: {} };
    case ActionType.FETCH_ALL_TRANSACTIONS_SUCCESS:
      return { ...initialState, data: action.payload };
    case ActionType.FETCH_ALL_TRANSACTIONS_ERROR:
      return { loading: false, error: action.payload, data: {} };
    default:
      return state;
  }
};

export default reducer;
