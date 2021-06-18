import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import Home from './components/test/Home';
import console from './components/console';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Result from './components/test/Result';

function App() {
  return (
    <Router>
    <div className="App">
        <Switch>
          <Route path="/" exact component={console} /> 
          {/* <Route path="/" exact component={Home} />  */}
          {/* <Route path="/" exact component={Result} />  */}
        </Switch>
    </div>
    </Router>
  );
}

export default App;
