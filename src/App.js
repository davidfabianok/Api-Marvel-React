import React, {useState} from "react";
import {ThemeProvider} from "emotion-theming";
import {themeLight, themeDark} from "./themes";
import Main from "./pages/Main";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeProvider theme={isDark ? themeDark : themeLight}>
      <Main isDark={isDark} setIsDark={setIsDark} />
    </ThemeProvider>
  );
};

export default App;
