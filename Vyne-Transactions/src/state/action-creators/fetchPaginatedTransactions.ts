import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

const PAGE_SIZE = 5;

interface ItemProps {
  items?: any[];
}

export const fetchPaginatedTransactions = (allData: ItemProps | undefined, start = 0) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_PAGINATED_TRANSACTIONS,
    });
    try {
      const paginatedData = allData?.items ? {items : allData.items.slice(start, start + PAGE_SIZE)} : {};

      dispatch({
        type: ActionType.FETCH_PAGINATED_TRANSACTIONS_SUCCESS,
        payload: paginatedData,
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.FETCH_PAGINATED_TRANSACTIONS_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
