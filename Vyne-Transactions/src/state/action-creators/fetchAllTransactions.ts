import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

const jsonResponse = require('./server-response.json');

interface ItemProps {
  items?: any[];
}

export const fetchAllTransactions = (input = 'ALL', start = 0) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_ALL_TRANSACTIONS,
    });
    try {
      let res : ItemProps = {};
      if(input === 'ALL'){
        res = await Promise.resolve(jsonResponse);
      } else {
        res = {
          items: jsonResponse.items.filter((i: any) => i.status.toLowerCase() === input.toLowerCase())
        }
      }

      dispatch({
        type: ActionType.FETCH_ALL_TRANSACTIONS_SUCCESS,
        payload: res
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.FETCH_ALL_TRANSACTIONS_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
