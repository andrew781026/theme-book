import {useState} from 'react';
import Switcher from './Switcher';
import ModeApp from './stories/mode/ModeApp';
import ThemeApp from './stories/theme/ThemeApp';
import VarApp from './stories/variable/VarApp';

function App() {
  const [type, setType] = useState('mode');

  return (
    <div>
      <Switcher setType={setType}/>
      {type === 'mode' && <ModeApp/>}
      {type === 'theme' && <ThemeApp/>}
      {type === 'var' && <VarApp/>}
    </div>
  );
}

export default App;
