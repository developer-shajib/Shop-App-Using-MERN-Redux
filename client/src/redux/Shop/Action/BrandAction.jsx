import { Utils } from '../../../utils/Utils.jsx';
import {
  CREATE_BRAND_FAILED,
  CREATE_BRAND_SUCCESS,
  DELETE_BRAND_FAILED,
  DELETE_BRAND_SUCCESS,
  GET_BRAND_FAILED,
  GET_BRAND_SUCCESS,
  GET_REQ,
  UPDATE_BRAND_FAILED,
  UPDATE_BRAND_SUCCESS,
} from '../ActionType.jsx';
import axios from 'axios';

/**
 * @name Get All Brand Request
 * @returns
 */
export const getAllBrands = () => async (dispatch) => {
  try {
    dispatch({ type: GET_REQ });
    await axios
      .get(`http://localhost:5050/api/v1/product/brand`)
      .then((res) => {
        dispatch({ type: GET_BRAND_SUCCESS, payload: res.data.brand });
      })
      .catch((error) => {
        dispatch({ type: GET_BRAND_FAILED, payload: error.response.data.message });
      });
  } catch (error) {
    dispatch({ type: GET_BRAND_FAILED, payload: error.message });
  }
};

/**
 * @name POST All Brand Request
 * @returns
 */
export const createBrands =
  ({ data, setInput, setAdminModal }) =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_REQ });
      await axios
        .post(`http://localhost:5050/api/v1/product/brand/`, data)
        .then((res) => {
          dispatch({ type: CREATE_BRAND_SUCCESS, payload: res.data.brand });
          setInput({ name: '', image: null });
          setAdminModal(false);
          Utils.createToastify('Brand Created Successful', 'success');
        })
        .catch((error) => {
          dispatch({ type: CREATE_BRAND_FAILED, payload: error.response.data.message });
          Utils.createToastify('Brand not created !', 'error');
        });
    } catch (error) {
      dispatch({ type: CREATE_BRAND_FAILED, payload: error.message });
    }
  };

/**
 * @name DELETE Single Brand
 * @returns
 */
export const deleteSingleBrand = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_REQ });
    await axios
      .delete(`http://localhost:5050/api/v1/product/brand/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_BRAND_SUCCESS, payload: res.data.brand });
        Utils.createToastify('Brand Deleted Successful', 'success');
      })
      .catch((error) => {
        dispatch({ type: DELETE_BRAND_FAILED, payload: error.response.data.message });
      });
  } catch (error) {
    dispatch({ type: DELETE_BRAND_FAILED, payload: error.message });
  }
};

/**
 * @name UPDATE Single Brand
 * @returns
 */
export const updateSingleBrand =
  ({ data, id, setEdit, setInput }) =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_REQ });
      await axios
        .patch(`http://localhost:5050/api/v1/product/brand/${id}`, data)
        .then((res) => {
          dispatch({ type: UPDATE_BRAND_SUCCESS, payload: res.data.brand });
          Utils.createToastify('Brand Update Successful', 'success');
          setEdit((prevState) => ({ ...prevState, updateId: '', dataBaseImage: '', editModal: false }));
          setInput((prevState) => ({ ...prevState, name: '', image: null }));
        })
        .catch((error) => {
          dispatch({ type: UPDATE_BRAND_FAILED, payload: error.response.data.message });
        });
    } catch (error) {
      dispatch({ type: UPDATE_BRAND_FAILED, payload: error.message });
    }
  };

/**
 * @name UPDATE  Single Brand Status
 * @returns
 */
export const updateSingleBrandStatus =
  ({ data, id }) =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_REQ });
      await axios
        .patch(`http://localhost:5050/api/v1/product/brand/${id}`, data)
        .then((res) => {
          dispatch({ type: UPDATE_BRAND_SUCCESS, payload: res.data.brand });
          Utils.createToastify('Brand Status Changed', 'success');
        })
        .catch((error) => {
          dispatch({ type: UPDATE_BRAND_FAILED, payload: error.response.data.message });
        });
    } catch (error) {
      dispatch({ type: UPDATE_BRAND_FAILED, payload: error.message });
    }
  };
