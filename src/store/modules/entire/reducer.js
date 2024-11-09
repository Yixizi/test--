import * as actionsTypes from "./constants";

const initialState = {
  currentPage: 0,
  roomList: [],
  totalCount: 0,
  isLoading: false,
  isFixed: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.CHANGE_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case actionsTypes.CHANGE_ROOM_LIST: {
      return { ...state, roomList: action.roomList };
    }
    case actionsTypes.CHANGE_TOTAL_COUNT: {
      return { ...state, totalCount: action.totalCount };
    }
    case actionsTypes.CHANGE_IS_LOADING: {
      return { ...state, isLoading: action.isLoading };
    }
    case 'header': {
      return { ...state, isFixed: action.isFixed };
    }
    default:
      return state;
  }
};

export default reducer;
