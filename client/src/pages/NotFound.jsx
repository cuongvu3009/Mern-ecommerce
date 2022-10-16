import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <Wrapper>
      <p>404 - We seem cannot find a page you looking for</p>
      <Link to='/'>Back Home</Link>
    </Wrapper>
  );
};

export default NotFound;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`;
