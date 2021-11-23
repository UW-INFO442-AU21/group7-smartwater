import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './Pages/Home';
import CalculatorPage from './Pages/CalculatorPage';
import KitchenPage from './Pages/KitchenPage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/calculator" exact component={() => <CalculatorPage />} />
            <Route path="/kitchen" exact component={() => <KitchenPage />} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
