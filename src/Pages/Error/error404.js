import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ErrorTitle, ErrorMessage, Button } from './styles';

export default function Error() {
  return (
    <Container>
      <ErrorTitle>
        Error 404 - Page not found.
      </ErrorTitle>
      <ErrorMessage>
        The page you tried to access was not found... 😕
      </ErrorMessage>
      <ErrorMessage>
        Why dont you try to get back to the main page?
      </ErrorMessage>
      <Link to="/">
        <Button>
          Get me back to home page
        </Button>
      </Link>
    </Container>
  );
}
