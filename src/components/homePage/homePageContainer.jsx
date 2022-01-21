import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../spinner/loadingSpinner';
import InfoCard from './infoCard';
import NotFoundedCard from './notFoundedCard';
import SearchForm from '../searchForm/searchForm';

const HomePageContainer = () => {
  const wordData = useSelector((state) => state.wordData);
  const isFetching = useSelector((state) => state.isFetching);
  const notFounded = useSelector((state) => state.notFounded);

  return (
    <>
      <Container className='mt-5'>
        <SearchForm />
        {isFetching ? <LoadingSpinner /> : null}
      </Container>
      <Container className='mt-3'>
        {wordData.word ? <InfoCard word={wordData.word} /> : null}
      </Container>
      <Container className='mt-3'>
        {notFounded ? <NotFoundedCard /> : null}
      </Container>
    </>
  );
};
export default HomePageContainer;
