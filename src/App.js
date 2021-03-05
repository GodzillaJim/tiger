import react from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import test from './components/test.js';

import './bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router className='App'>
      <Switch>
        <Route path='/test' component={test}/>
        <Route path='/' exact component={HomeScreen} />
      </Switch>
    </Router>
  );
}

export default App;
