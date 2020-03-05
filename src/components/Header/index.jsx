import React from 'react';
import styled from '@emotion/styled';
import Logo from '../Logo';
import Search from '../Search';
import './style.scss';

const Wrapper = styled.header`
  background-color: ${props => props.theme.background};
`;

const Header = () => {
  return (
    <Wrapper className='header'>
      <Logo src='https://www.stickpng.com/assets/images/585f9333cb11b227491c3581.png' />
      <Search place='Search' />
    </Wrapper>
  );
};

export default Header;
