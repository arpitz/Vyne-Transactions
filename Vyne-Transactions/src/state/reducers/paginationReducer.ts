import { ActionType } from '../action-types';
import { Action } from '../actions';

interface PaginationState {
  loading: boolean;
  error: string | null;
  paginatedData: {
    items?: []
  };
}

const initialState = {
  loading: false,
  error: null,
  paginatedData: {}
};

const reducer = (
  state: PaginationState = initialState,
  action: Action
): PaginationState => {
  switch (action.type) {
    case ActionType.FETCH_PAGINATED_TRANSACTIONS:
      return { loading: true, error: null, paginatedData: {} };
    case ActionType.FETCH_PAGINATED_TRANSACTIONS_SUCCESS:
      return { ...initialState, paginatedData: action.payload };
    case ActionType.FETCH_PAGINATED_TRANSACTIONS_ERROR:
      return { loading: false, error: action.payload, paginatedData: {} };
    default:
      return state;
  }
};

export default reducer;
