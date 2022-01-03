import React from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchForm = () => {
  const getWord = (e) => {
    e.preventDefault();
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
