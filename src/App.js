import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import test from './components/test.js';
import Loading from './components/Loading';

import './bootstrap.min.css';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);
  return (
    <div>
      {!loading ? (
        <Router className='App'>
          <Switch>
            <Route path='/test' component={test} />
            <Route path='/' exact component={HomeScreen} />
          </Switch>
        </Router>
      ) : (
        <div className='container'>
          <div
            style={{ height: '100vh' }}
            className='d-flex justify-content-center align-items-center'
          >
            <div className='col text-center'>
              <Loading />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;
