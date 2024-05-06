import styled from 'styled-components';
import { PropsWithChildren } from 'react';

const StyledBrandText = styled.div`
  font-family: 'Spoqa Han Sans Neo';
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
`;

const BrandText = ({ children }: PropsWithChildren) => {
  return <StyledBrandText>{children}</StyledBrandText>;
};

export default BrandText;
