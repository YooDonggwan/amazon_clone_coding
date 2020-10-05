import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import Header from './Header';
import Home from './Home'
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function App() {
  const [{user}, dispatch] = useStateValue();

  // useEffect is powerful
  // piece of code which runs based on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        //user가 로그인되어있으면
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //로그아웃이면
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    return () => {
      // any cleanup operations go in here
      unsubscribe();
    }

  }, [])

  console.log(user)

  return (
    <Router> 
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/* this is the default route */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

// {/* We need React-Router */}

// {/* localhost.com */}
// {/* localhost.com/checkout */}
// {/* localhost.com/login */}

export default App;
