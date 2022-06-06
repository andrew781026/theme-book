import React from "react";
import ThemeCard from "./ThemeCard";
import styled, {ThemeProvider} from "styled-components";

const RootStyle = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.screenBgc};
  flex-direction: column;
`;

const roseTheme = {
  mode: 'rose',
  cardBgc: '#f87de7',
  screenBgc: '#ff00e8',
  descColor: '#fff',
  tumblerLeft: '4px',
};

const knifeTheme = {
  mode: 'knife',
  cardBgc: '#ff5a5a',
  screenBgc: '#ff0000',
  descColor: '#fff',
  tumblerLeft: '30px',
};

export default class App extends React.PureComponent {
  state = {mode: "rose"};

  toggleMode = () => {
    this.setState((state) =>
      state.mode === "rose" ? {mode: "knife"} : {mode: "rose"}
    );
  };

  render() {
    return (
      <ThemeProvider theme={(this.state.mode === 'knife') ? knifeTheme : roseTheme}>
        <RootStyle>
          <ThemeCard toggleMode={this.toggleMode}/>
        </RootStyle>
      </ThemeProvider>
    );
  }
}
