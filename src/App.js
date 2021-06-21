import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import Home from './components/test/Home';
import Console from './components/Console';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store';
import { Provider } from 'react-redux'


function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
        <Switch>
          <Route path="/" exact component={Console} /> 
          {/* <Route path="/" exact component={Home} />  */}
          {/* <Route path="/" exact component={Result} />  */}
        </Switch>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
