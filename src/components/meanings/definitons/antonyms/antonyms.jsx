import React from 'react';
import { Card } from 'react-bootstrap';

const Antonyms = (props) => {
  const { antonyms } = props;
  return (
    <>
      <Card.Subtitle>antonyms :</Card.Subtitle>
      <Card.Text>{antonyms.join(', ')}</Card.Text>
    </>
  );
};

export default Antonyms;
