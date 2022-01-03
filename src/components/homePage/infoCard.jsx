import React from 'react';
import { Card } from 'react-bootstrap';

const InfoCard = (props) => {
  const { word } = props;
  return (
    <Card>
      <Card.Body>
        <Card.Text>
          info about:&nbsp;
          {word}
          &nbsp;is available on result page
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InfoCard;
