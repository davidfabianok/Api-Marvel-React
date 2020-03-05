import React from "react";
import styled from "@emotion/styled";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import GridCards from "../../components/GridCards";
import SearchProvider from "../../provider/SearchPrivider";

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 2.5rem);
  background-color: ${props => props.theme.backgroundSecondary};
  transition-duration: 0.2s;
  transition-property: background-color;
`;

const Main = ({isDark, setIsDark}) => {
  return (
    <>
      <Wrapper className="main">
        <SearchProvider>
          <Header />
          <GridCards />
        </SearchProvider>
      </Wrapper>
      <Footer isDark={isDark} setIsDark={setIsDark}/>
    </>
  );
};

export default Main;
