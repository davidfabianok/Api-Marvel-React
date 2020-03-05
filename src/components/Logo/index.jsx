import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.img`
  width: 100px;
  padding: 0px 10px;
  border-right: 1px solid ${props => props.theme.colorSecondary};
`;

const Logo = ({src}) => <Wrapper className="logo" src={src} alt="logo" />;

export default Logo;
