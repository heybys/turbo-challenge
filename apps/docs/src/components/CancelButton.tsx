import React from 'react';
import styled from 'styled-components';

const StyledCancelButton = styled.button`
  color: ${({ theme }) => theme.colors};
`;

const CancelButton = () => {
  return <StyledCancelButton>cancel</StyledCancelButton>;
};

export default CancelButton;
