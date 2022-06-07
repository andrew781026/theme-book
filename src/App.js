import Switcher from './Switcher';
import ModeApp from './stories/mode/ModeApp';
import ThemeApp from './stories/theme/ThemeApp';
import VarApp from './stories/variable/VarApp';
import Description from "./desc/Description";
import {Switch, Route} from "react-router-dom";

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
    </div>
  );
}

export default App;
