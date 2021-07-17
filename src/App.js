import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import { useEffect } from 'react';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import Category from './containers/Category';
import PrivateRoute from './components/HOC/PrivateRoute';
import { isUserLoggedIn } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import Products from './containers/Products';
import Orders from './containers/Orders';

function App() {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();


  useEffect(()=>{
    //it will check user is logged in or not by checking token
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());
    }
},[])


  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/category" component={Category} />
          <PrivateRoute path="/products" component={Products} />
          <PrivateRoute path="/orders" component={Orders} />

          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
