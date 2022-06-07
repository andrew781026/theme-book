import Switcher from './Switcher';
import ModeApp from './stories/mode/ModeApp';
import ThemeApp from './stories/theme/ThemeApp';
import VarApp from './stories/variable/VarApp';
import Description from "./desc/Description";
import {Switch, Route} from "react-router-dom";
import GithubCorner from 'react-github-corner';

function App() {
  return (
    <div>
      <Switcher/>
      <Switch>
        <Route exact path="/mode"><ModeApp/></Route>
        <Route exact path="/theme"><ThemeApp/></Route>
        <Route exact path="/var"><VarApp/></Route>
        <Route  path="*"><ModeApp/></Route>
      </Switch>
      <Description/>
      <GithubCorner href="https://github.com/andrew781026/theme-book" />
    </div>
  );
}

export default App;
