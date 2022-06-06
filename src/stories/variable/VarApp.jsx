import React from "react";
import VarCard from "./VarCard";
import styled from "styled-components";

const spyTheme = {
  mode: 'spy',
  cardBgc: '#585858',
  screenBgc: '#333',
  titleColor: '#00ffff',
  descColor: '#fff',
  tumblerLeft: '3px'
};

const doctorTheme = {
  mode: 'doctor',
  cardBgc: '#fff',
  screenBgc: '#E0FFFF',
  titleColor: '#00ffff',
  descColor: '#585858',
  tumblerLeft: '30px'
};

const RootStyle = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--screenBgc);
  flex-direction: column;
`;

export default class App extends React.PureComponent {
  state = {mode: "spy"};

  componentDidMount() {
    this.setTheme(this.state.mode === "spy" ? spyTheme : doctorTheme);
  }

  setTheme = obj => {
    for (const objKey in obj) {
      this.setVarCss(`--${objKey}`, obj[objKey])
    }
  }

  setVarCss = (name, value) => document.documentElement.style.setProperty(name, value);

  toggleMode = () => {
    this.setState((state) => {

      if (state.mode === "spy") {

        this.setTheme(doctorTheme);
        return {mode: "doctor"};

      } else {

        this.setTheme(spyTheme);
        return {mode: "spy"};
      }
    });
  };

  render() {
    return (
      <RootStyle>
        <VarCard toggleMode={this.toggleMode}/>
      </RootStyle>
    );
  }
}
