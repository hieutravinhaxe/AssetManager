import { exceptionConstants, requestConstants } from '../constants'
import { checkAuthentication } from './auth.action'
import { RequestService } from '../services'
const {
  RESET_SORT_FILTER,
  SET_SORT_TYPE,
  FILTER_BY_STATE,
  FILTER_BY_RETURNED_DATE,
  CHANGE_CURRENT_PAGE,
  SEARCH_REQUEST,
  GET_REQUEST_LIST,
  UPDATE_DATA_FILTER,
  ADMIN_COMPLETE_REQUEST,
  ADMIN_CANCEL_REQUEST,
} = requestConstants

const { SUCCESS } = exceptionConstants

export const getAllRequests = (credentials) => {
  return async function (dispatch) {
    const response = await RequestService.getAllRequests(credentials)
    const { code, data } = response
    checkAuthentication(code)
    if (code === SUCCESS) {
      dispatch({
        type: GET_REQUEST_LIST,
        payload: {
          requestList: data.data,
          total: data.meta.total,
        },
      })
    }
    return response
  }
}

export const getStateInRequestList = () => {
  return async function (dispatch) {
    const response = await RequestService.getStateInRequestList()
    const { code, data } = response
    checkAuthentication(code)
    if (code === SUCCESS) {
      dispatch({
        type: UPDATE_DATA_FILTER,
        payload: {
          dataFilter: data.states,
        },
      })
    }
    return response
  }
}

export const cancelRequest = (id) => {
  return async function (dispatch) {
    const response = await RequestService.cancelRequest(id)
    const { code } = response
    checkAuthentication(code)
    if (code === SUCCESS) {
      dispatch({
        type: ADMIN_CANCEL_REQUEST,
      })
    }
    return response
  }
}

export const completeRequest = (id, credentials) => {
  return async function (dispatch) {
    const response = await RequestService.completeRequest(id, credentials)
    const { code } = response
    checkAuthentication(code)
    if (code === SUCCESS) {
      dispatch({
        type: ADMIN_COMPLETE_REQUEST,
      })
    }
    return response
  }
}

export const changePageInRequestList = (page) => ({
  type: CHANGE_CURRENT_PAGE,
  payload: {
    currentPage: page,
  },
})

export const searchRequest = (search) => ({
  type: SEARCH_REQUEST,
  payload: {
    searchKeywords: search,
  },
})

export const setSortTypeInRequestList = (data) => ({
  type: SET_SORT_TYPE,
  payload: {
    sortType: data.sortType,
    sortValue: data.sortValue,
  },
})

export const setFilterByStateInRequestList = (filterType) => ({
  type: FILTER_BY_STATE,
  payload: {
    filterByState: filterType,
  },
})

export const setFilterByReturnedDateInRequestList = (filterType) => ({
  type: FILTER_BY_RETURNED_DATE,
  payload: {
    filterByReturnedDate: filterType,
  },
})

export const resetSortFilterInRequestList = () => ({
  type: RESET_SORT_FILTER,
})
