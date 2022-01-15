import './App.css';
import { Route, Switch} from "react-router-dom";
import { Songs } from './components/AllSong';
import { Home } from './components/Main';

function App() {
  return (
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route  path="/songs/:id"><Songs /></Route>
      </Switch>
  );
}

export default App;
