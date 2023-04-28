import {
  CREATE_BRAND_FAILED,
  CREATE_BRAND_SUCCESS,
  CREATE_CATEGORY_FAILED,
  CREATE_CATEGORY_SUCCESS,
  CREATE_TAG_FAILED,
  CREATE_TAG_SUCCESS,
  DELETE_BRAND_FAILED,
  DELETE_BRAND_SUCCESS,
  DELETE_CATEGORY_FAILED,
  DELETE_CATEGORY_SUCCESS,
  DELETE_TAG_FAILED,
  DELETE_TAG_SUCCESS,
  GET_BRAND_FAILED,
  GET_BRAND_SUCCESS,
  GET_CATEGORY_FAILED,
  GET_CATEGORY_SUCCESS,
  GET_PRODUCT_FAILED,
  GET_PRODUCT_SUCCESS,
  GET_REQ,
  GET_TAG_FAILED,
  GET_TAG_SUCCESS,
  UPDATE_BRAND_FAILED,
  UPDATE_BRAND_SUCCESS,
  UPDATE_CATEGORY_FAILED,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_TAG_FAILED,
  UPDATE_TAG_SUCCESS,
} from './ActionType.jsx';
import { InitialState } from './InitialState.jsx';

// Create Shop Reducer
export const ShopReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case GET_REQ:
      return {
        ...state,
        loading: true,
      };

    // Brand Action
    case GET_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        brands: payload,
      };

    case GET_BRAND_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case CREATE_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        brands: [payload, ...state.brands],
      };

    case CREATE_BRAND_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case DELETE_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        brands: state.brands.filter((item) => item._id != payload._id),
      };

    case DELETE_BRAND_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case UPDATE_BRAND_SUCCESS:
      state.brands[state.brands.findIndex((item) => item._id == payload._id)] = payload;
      return {
        ...state,
        loading: false,
        brands: state.brands,
      };

    case UPDATE_BRAND_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    // Tag Action
    case GET_TAG_SUCCESS:
      return {
        ...state,
        loading: false,
        tags: payload,
      };

    case GET_TAG_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case CREATE_TAG_SUCCESS:
      return {
        ...state,
        loading: false,
        tags: [payload, ...state.tags],
      };

    case CREATE_TAG_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case DELETE_TAG_SUCCESS:
      return {
        ...state,
        loading: false,
        tags: state.tags.filter((item) => item._id !== payload._id),
      };

    case DELETE_TAG_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case UPDATE_TAG_SUCCESS:
      state.tags[state.tags.findIndex((item) => item._id == payload._id)] = payload;
      return {
        ...state,
        loading: false,
        tags: state.tags,
      };

    case UPDATE_TAG_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    // Categories Action
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: payload,
      };

    case GET_CATEGORY_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: [payload, ...state.categories],
      };

    case CREATE_CATEGORY_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: state.categories.filter((item) => item._id !== payload._id),
      };

    case DELETE_CATEGORY_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case UPDATE_CATEGORY_SUCCESS:
      state.categories[state.categories.findIndex((item) => item._id == payload._id)] = payload;
      return {
        ...state,
        loading: false,
        categories: state.categories,
      };

    case UPDATE_CATEGORY_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    // Product Action
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload,
        message: 'Product loaded',
      };

    case GET_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
