import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
          <Switch>
            <Route path="/" exact component={() => <Home />} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
