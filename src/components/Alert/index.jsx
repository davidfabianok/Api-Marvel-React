import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  margin-top: 4rem;
  width: 100%;
  p {
    color: ${props => props.theme.colorPrimary};
    font-size: 3rem;
    text-align: center;
    font-family: 'Roboto', 'Open Sans', 'Trebuchet MS', 'Helvetica', sans-serif;
  }
`;

const Alert = ({ msg }) => (
  <Wrapper>
    <p>{msg}</p>
  </Wrapper>
);

export default Alert;
