import * as actionTypes from './actionTypes'
import Config from '../constants/Config'
import axios from 'axios';

export const getList = (data) => {
  return (dispatch) => {
    dispatch(storeUpdate({
      [`${data.keys}_loading`]: true
    }))
    const URL = `${Config.URL_API}books/v1/volumes${Config.createObjectToParams(data.params)}`
    axios
      .get(URL)
      .then((response) => {
        dispatch(storeUpdate({
          [data.keys]: response.data,
          [`${data.keys}_loading`]: false
        }));
      })
      .catch((error) => {
        dispatch(storeUpdate({
          [`${data.keys}_loading`]: false
        }));
      });
  }
}

export const storeUpdate = (data) => ({
  type: actionTypes.BOOKS_STORE,
  data
})