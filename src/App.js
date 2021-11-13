
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
import Register from './pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';



function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/allProducts">
              <AllProducts></AllProducts>
            </PrivateRoute>


            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>


            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>


          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
