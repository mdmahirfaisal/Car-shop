
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import NotFound from './pages/NotFound/NotFound';
import AllProducts from './pages/AllProducts/AllProducts';

function App() {
  return (
    <div className="App">

      <Router>

        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/allProducts">
            <AllProducts></AllProducts>
          </Route>


          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
