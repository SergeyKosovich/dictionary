import {
  FETCHING_START,
  NOT_FOUNDED,
  SET_RESULT,
} from '../constants/constants';

const initialState = {
  wordData: {},
  isFetching: false,
  notFounded: false,
};
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESULT: {
      return {
        ...state,
        wordData: action.wordData,
        isFetching: false,
        notFounded: false,
      };
    }

    case FETCHING_START: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case NOT_FOUNDED: {
      return {
        ...state,
        wordData: {},
        isFetching: false,
        notFounded: true,
      };
    }

    default:
      return state;
  }
};

export default searchReducer;
