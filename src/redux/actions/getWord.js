import axios from 'axios';
import {
  FETCHING_START,
  NOT_FOUNDED,
  SET_RESULT,
  URL,
} from '../../constants/constants';

const getWordCreator = (word) => {
  return async (dispatch) => {
    dispatch({ type: FETCHING_START });
    try {
      const response = await axios.get(`${URL}${word}`);
      const wordData = {
        word: response.data[0].word,
        phonetics: response.data[0].phonetics[0],
        origin: response.data[0].origin,
        meanings: response.data[0].meanings,
      };
      dispatch({ type: SET_RESULT, wordData });
    } catch (e) {
      dispatch({ type: NOT_FOUNDED });
    }
  };
};

export default getWordCreator;
