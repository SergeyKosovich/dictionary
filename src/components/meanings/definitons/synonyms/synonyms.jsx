import React from 'react';
import { Card } from 'react-bootstrap';

const Synonyms = (props) => {
  const { synonyms } = props;
  return (
    <>
      <Card.Subtitle>synonyms :</Card.Subtitle>
      <Card.Text>{synonyms.join(', ')}</Card.Text>
    </>
  );
};

export default Synonyms;
