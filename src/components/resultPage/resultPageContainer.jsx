import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { React, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Meanings from '../meanings/meanings';
import Phonetics from '../phonetics/phonetics';
import getWordCreator from '../../redux/actions/getWord';
import { NOT_FOUND, RESULT_ROUTE } from '../../constants/constants';
import LoadingSpinner from '../spinner/loadingSpinner';

const ResultPageContainer = () => {
  const dispatch = useDispatch();
  const { searchWord } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const notFounded = useSelector((state) => state.notFounded);
  const wordData = useSelector((state) => state.wordData);
  const isFetching = useSelector((state) => state.isFetching);

  useEffect(() => {
    if (notFounded) {
      navigate(NOT_FOUND);
    }
  }, [notFounded, navigate]);

  useEffect(() => {
    if (location.pathname !== RESULT_ROUTE) {
      dispatch(getWordCreator(searchWord));
    }
  }, [dispatch, location.pathname, searchWord]);

  return (
    <Container>
      <h2 className='mt-5'>Results</h2>
      {isFetching ? <LoadingSpinner /> : null}
      {wordData.word ? (
        <>
          <h3>
            Word:
            {wordData.word}
          </h3>
          <Meanings meanings={wordData.meanings} />
          <Phonetics
            text={wordData.phonetics.text}
            audio={wordData.phonetics.audio}
          />
        </>
      ) : null}
    </Container>
  );
};
export default ResultPageContainer;
