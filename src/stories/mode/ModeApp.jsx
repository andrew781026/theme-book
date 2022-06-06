import React from "react";
import ModeCard from "./ModeCard";
import styled, {ThemeProvider} from "styled-components";

const RootStyle = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.mode === "dark" ? "#eef609" : "#f69709"};
`;

export default class App extends React.PureComponent {
  state = {mode: "dark"};

  toggleMode = () => {
    this.setState((state) =>
      state.mode === "dark" ? {mode: "light"} : {mode: "dark"}
    );
  };

  render() {
    return (
      <ThemeProvider theme={{mode: this.state.mode}}>
        <RootStyle>
          <ModeCard toggleMode={this.toggleMode}/>
        </RootStyle>
      </ThemeProvider>
    );
  }
}
