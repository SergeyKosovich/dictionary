import React from 'react';
import { Container } from 'react-bootstrap';
import SearchForm from '../searchForm/searchForm';

const HomePageContainer = () => {
  return (
    <>
      <Container className='mt-5'>
        <SearchForm />       
      </Container>
      <Container className='mt-3'>  
      </Container>
    </>
  );
};
export default HomePageContainer;
