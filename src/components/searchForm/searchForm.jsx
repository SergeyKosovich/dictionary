import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import getWordCreator from '../../redux/actions/getWord';

const SearchForm = () => {
  const dispatch = useDispatch();
  const getWord = (e) => {
    e.preventDefault();
    dispatch(getWordCreator(e.target[0].value));
  };
  return (
    <Form onSubmit={getWord}>
      <Form.Group className='mb-3'>
        <Form.Label>Enter word</Form.Label>
        <Form.Control type='text' placeholder='Enter word' />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};

export default SearchForm;
