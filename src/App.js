import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Route path="/">
            <Home/>
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
