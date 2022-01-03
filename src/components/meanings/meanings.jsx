import React from 'react';
import { Card } from 'react-bootstrap';
import Definitions from './definitons/definitions';

const Meanings = (props) => {
  const { meanings } = props;

  return (
    <>
      {meanings.map((item) => (
        <Card key={item.partOfSpeech}>
          <Card.Body>
            <Card.Title>
              part of speech :
              {item.partOfSpeech}
            </Card.Title>
            <Definitions definitions={item.definitions} />
          </Card.Body>
        </Card>
      ))}
    </>
  );
};
export default Meanings;
