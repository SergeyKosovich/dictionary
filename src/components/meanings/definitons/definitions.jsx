import React from 'react';
import { Card } from 'react-bootstrap';
import Antonyms from './antonyms/antonyms';
import Synonyms from './synonyms/synonyms';

const Definitions = (props) => {
  const { definitions } = props;
  return (
    <>
      {definitions.map((item) => (
        <div key={item.definition}>
          {item.antonyms.length > 0 ? (
            <Antonyms antonyms={item.antonyms} />
          ) : null}
          <Card.Subtitle className='mt-3'>definition:</Card.Subtitle>
          <Card.Text>{item.definition}</Card.Text>
          <Card.Subtitle>example:</Card.Subtitle>
          <Card.Text>{item.example}</Card.Text>
          {item.synonyms.length > 0 ? (
            <Synonyms synonyms={item.synonyms} />
          ) : null}
        </div>
      ))}
    </>
  );
};

export default Definitions;
