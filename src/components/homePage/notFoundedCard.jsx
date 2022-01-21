import React from 'react';
import { Card } from 'react-bootstrap';

const NotFoundedCard = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Text>
          The word you&#39;ve entered isn&#39;t in the dictionary. Try again.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NotFoundedCard;
