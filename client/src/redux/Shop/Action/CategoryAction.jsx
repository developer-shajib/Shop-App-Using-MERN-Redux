import { Utils } from '../../../utils/Utils.jsx';
import axios from 'axios';
import {
  CREATE_CATEGORY_FAILED,
  CREATE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILED,
  DELETE_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILED,
  GET_CATEGORY_SUCCESS,
  GET_REQ,
  UPDATE_CATEGORY_FAILED,
  UPDATE_CATEGORY_SUCCESS,
} from '../ActionType.jsx';

/**
 * @name Get All Brand Request
 * @returns
 */
export const getAllCategories = () => async (dispatch) => {
  try {
    dispatch({ type: GET_REQ });
    await axios
      .get(`http://localhost:5050/api/v1/product/category`)
      .then((res) => {
        dispatch({ type: GET_CATEGORY_SUCCESS, payload: res.data.category });
      })
      .catch((error) => {
        dispatch({ type: GET_CATEGORY_FAILED, payload: error.response.data.message });
      });
  } catch (error) {
    dispatch({ type: GET_CATEGORY_FAILED, payload: error.message });
  }
};

/**
 * @name POST Create a Brand Request
 * @returns
 */
export const createCategory =
  ({ data, setInput, setAdminModal }) =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_REQ });
      await axios
        .post(`http://localhost:5050/api/v1/product/category`, data)
        .then((res) => {
          dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: res.data.category });
          setInput({ name: '', image: null });
          setAdminModal(false);
          Utils.createToastify('Category Created Successful', 'success');
        })
        .catch((error) => {
          dispatch({ type: CREATE_CATEGORY_FAILED, payload: error.response.data.message });
          Utils.createToastify('Category not created !', 'error');
        });
    } catch (error) {
      dispatch({ type: CREATE_CATEGORY_FAILED, payload: error.message });
    }
  };

/**
 * @name DELETE Single Category
 * @returns
 */
export const deleteSingleCategory = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_REQ });
    await axios
      .delete(`http://localhost:5050/api/v1/product/category/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_CATEGORY_SUCCESS, payload: res.data.category });
        Utils.createToastify('Category Deleted Successful', 'success');
      })
      .catch((error) => {
        dispatch({ type: DELETE_CATEGORY_FAILED, payload: error.response.data.message });
      });
  } catch (error) {
    dispatch({ type: DELETE_CATEGORY_FAILED, payload: error.message });
  }
};

/**
 * @name UPDATE Single Category
 * @returns
 */
export const updateSingleCategory =
  ({ data, id, setEdit, setInput }) =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_REQ });
      await axios
        .patch(`http://localhost:5050/api/v1/product/category/${id}`, data)
        .then((res) => {
          dispatch({ type: UPDATE_CATEGORY_SUCCESS, payload: res.data.category });
          Utils.createToastify('Category Update Successful', 'success');
          setEdit((prevState) => ({ ...prevState, updateId: '', dataBaseImage: '', editModal: false }));
          setInput((prevState) => ({ ...prevState, name: '', image: null }));
        })
        .catch((error) => {
          dispatch({ type: UPDATE_CATEGORY_FAILED, payload: error.response.data.message });
        });
    } catch (error) {
      dispatch({ type: UPDATE_CATEGORY_FAILED, payload: error.message });
    }
  };

/**
 * @name UPDATE  Single Brand Status
 * @returns
 */
export const updateSingleCategoryStatus =
  ({ data, id }) =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_REQ });
      await axios
        .patch(`http://localhost:5050/api/v1/product/category/${id}`, data)
        .then((res) => {
          dispatch({ type: UPDATE_CATEGORY_SUCCESS, payload: res.data.category });
          Utils.createToastify('Category Status Changed', 'success');
        })
        .catch((error) => {
          dispatch({ type: UPDATE_CATEGORY_FAILED, payload: error.response.data.message });
        });
    } catch (error) {
      dispatch({ type: UPDATE_CATEGORY_FAILED, payload: error.message });
    }
  };
