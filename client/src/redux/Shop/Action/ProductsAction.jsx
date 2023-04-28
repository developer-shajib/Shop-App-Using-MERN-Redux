import axios from 'axios';
import { GET_PRODUCT_FAILED, GET_PRODUCT_SUCCESS, GET_REQ } from '../ActionType.jsx';

/**
 * @name Get All Product Request
 * @returns
 */
export const getAllProduct = () => async (dispatch) => {
  try {
    dispatch({ type: GET_REQ });
    await axios
      .get(`http://localhost:5050/api/v1/product`)
      .then((res) => {
        dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data.product });
      })
      .catch((error) => {
        dispatch({ type: GET_PRODUCT_FAILED, payload: error.response.data.message });
      });
  } catch (error) {
    dispatch({ type: GET_PRODUCT_FAILED, payload: error.message });
  }
};
