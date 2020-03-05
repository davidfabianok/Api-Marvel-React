import React from "react";
import styled from "@emotion/styled";
import './style.scss';
const Wrapper = styled.footer`
  background-color: ${props => props.theme.background};
  .footer--btn-dark-mode {
    background: ${props => props.theme.invertColor};
    color: ${props => props.theme.background};
  }
`;

const Footer = ({isDark, setIsDark}) => {
  const toggleIsDarck = () => {
    setIsDark(!isDark);
  };
  return (
    <>
      <Wrapper className="footer">
        <button className="footer--btn-dark-mode" onClick={toggleIsDarck}>
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>
        <p>
          By David Fabian 
          <span className="firm">
            <i className="firm fas fa-dragon"></i>
          </span>
        </p>
      </Wrapper>
    </>
  );
};

export default Footer;
