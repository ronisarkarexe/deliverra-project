import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Admin from './components/Admin/Admin/Admin';
import Deshboard from './components/Deshboard/Deshboard/Deshboard';
import Contact from './components/Shared/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/dashboard">
          <Deshboard></Deshboard>
        </Route>
        <Route path="/admin">
          <Admin></Admin>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <h1 className="text-center mt-5 pt-5">Page Not Found 404</h1> 
          <p className="text-center">Go to <Link to="/home">Home</Link> page</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
