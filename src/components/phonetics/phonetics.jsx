import React from 'react';
import { Card } from 'react-bootstrap';

const Phonetics = (props) => {
  const { text, audio } = props;

  return (
    <>
      <h4>phonetics:</h4>
      <Card>
        <Card.Body>
          <Card.Text>
            text :
            {text}
          </Card.Text>
          <Card.Text>audio: </Card.Text>
          <audio controls src={audio}>
            <track kind='captions' />
          </audio>
        </Card.Body>
      </Card>
    </>
  );
};

export default Phonetics;
