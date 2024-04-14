import React from 'react';
import styled from 'styled-components';

const StyledNotFoundPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;

  span {
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

const NotFoundPage = () => {
  return (
    <StyledNotFoundPage>
      <span>🚫 Not Found Page</span>
    </StyledNotFoundPage>
  );
};

export default NotFoundPage;
