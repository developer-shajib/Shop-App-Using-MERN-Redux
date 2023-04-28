import axios from 'axios';
import { Utils } from '../../../utils/Utils.jsx';

import {
  CREATE_TAG_FAILED,
  CREATE_TAG_SUCCESS,
  DELETE_TAG_FAILED,
  DELETE_TAG_SUCCESS,
  GET_REQ,
  GET_TAG_FAILED,
  GET_TAG_SUCCESS,
  UPDATE_TAG_FAILED,
  UPDATE_TAG_SUCCESS,
} from '../ActionType.jsx';

/**
 * @name Get All Tag Request
 * @returns
 */
export const getAllTag = () => async (dispatch) => {
  try {
    dispatch({ type: GET_REQ });

    await axios
      .get(`http://localhost:5050/api/v1/product/tag`)
      .then((res) => {
        dispatch({ type: GET_TAG_SUCCESS, payload: res.data.tag });
      })
      .catch((error) => {
        dispatch({ type: GET_TAG_FAILED, payload: error.response.data.message });
      });
  } catch (error) {
    dispatch({ type: GET_TAG_FAILED, payload: error.message });
  }
};

/**
 * @name POST Create  Tag Request
 * @returns
 */
export const createTags =
  ({ name, setInput, setAdminModal }) =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_REQ });
      await axios
        .post(`http://localhost:5050/api/v1/product/tag`, { name })
        .then((res) => {
          dispatch({ type: CREATE_TAG_SUCCESS, payload: res.data.tag });
          setInput({ name: '', image: null });
          setAdminModal(false);
          Utils.createToastify('Tag Created Successful', 'success');
        })
        .catch((error) => {
          dispatch({ type: CREATE_TAG_FAILED, payload: error.response.data.message });
          setInput({ name: '', image: null });
          setAdminModal(false);
          Utils.createToastify('Tag not created !', 'error');
        });
    } catch (error) {
      dispatch({ type: CREATE_TAG_FAILED, payload: error.message });
    }
  };

/**
 * @name DELETE Single Tag
 * @returns
 */
export const deleteSingleTag = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_REQ });
    await axios
      .delete(`http://localhost:5050/api/v1/product/tag/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_TAG_SUCCESS, payload: res.data.tag });
        Utils.createToastify('Tag Deleted Successful', 'success');
      })
      .catch((error) => {
        dispatch({ type: DELETE_TAG_FAILED, payload: error.response.data.message });
      });
  } catch (error) {
    dispatch({ type: DELETE_TAG_FAILED, payload: error.message });
  }
};

/**
 * @name UPDATE Single Tag
 * @returns
 */
export const updateSingleTag =
  ({ name, id, setEdit, setInput }) =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_REQ });
      await axios
        .patch(`http://localhost:5050/api/v1/product/tag/${id}`, { name })
        .then((res) => {
          dispatch({ type: UPDATE_TAG_SUCCESS, payload: res.data.tag });
          Utils.createToastify('Tag Update Successful', 'success');
          setEdit((prevState) => ({ ...prevState, updateId: '', dataBaseImage: '', editModal: false }));
          setInput((prevState) => ({ ...prevState, name: '' }));
        })
        .catch((error) => {
          dispatch({ type: UPDATE_TAG_FAILED, payload: error.response.data.message });
        });
    } catch (error) {
      dispatch({ type: UPDATE_TAG_FAILED, payload: error.message });
    }
  };

/**
 * @name UPDATE  Single Tag Status
 * @returns
 */
export const updateSingleTagStatus =
  ({ data, id }) =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_REQ });
      await axios
        .patch(`http://localhost:5050/api/v1/product/tag/${id}`, data)
        .then((res) => {
          dispatch({ type: UPDATE_TAG_SUCCESS, payload: res.data.tag });
          Utils.createToastify('Tag Status Changed', 'success');
        })
        .catch((error) => {
          dispatch({ type: UPDATE_TAG_FAILED, payload: error.response.data.message });
        });
    } catch (error) {
      dispatch({ type: UPDATE_TAG_FAILED, payload: error.message });
    }
  };
