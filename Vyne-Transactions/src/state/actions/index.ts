import { ActionType } from '../action-types';

interface FetchAllTransactionsAction {
  type: ActionType.FETCH_ALL_TRANSACTIONS;
}

interface FetchAllTransactionsSuccessAction {
  type: ActionType.FETCH_ALL_TRANSACTIONS_SUCCESS;
  payload: {};
}

interface FetchAllTransactionsErrorAction {
  type: ActionType.FETCH_ALL_TRANSACTIONS_ERROR;
  payload: string;
}

interface FetchPaginatedTransactionsAction {
  type: ActionType.FETCH_PAGINATED_TRANSACTIONS;
}

interface FetchPaginatedTransactionsSuccessAction {
  type: ActionType.FETCH_PAGINATED_TRANSACTIONS_SUCCESS;
  payload: {};
}

interface FetchPaginatedTransactionsErrorAction {
  type: ActionType.FETCH_PAGINATED_TRANSACTIONS_ERROR;
  payload: string;
}

export type Action =
  | FetchAllTransactionsAction
  | FetchAllTransactionsSuccessAction
  | FetchAllTransactionsErrorAction
  | FetchPaginatedTransactionsAction
  | FetchPaginatedTransactionsSuccessAction
  | FetchPaginatedTransactionsErrorAction;
