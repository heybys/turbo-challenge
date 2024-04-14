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
`;

const StyledTextArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;

  .status {
    font-size: 1.5rem;
  }
`;

const NotFoundPage = () => {
  return (
    <StyledNotFoundPage>
      <StyledTextArea>
        <div className="status">404</div>
        <div className="line vr me-3 ms-3" />
        <div>This page could not be found.</div>
      </StyledTextArea>
    </StyledNotFoundPage>
  );
};

export default NotFoundPage;
