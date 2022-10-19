import React from 'react';
import MainScreen from './animal/mainScreen';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AboutScreen from './animal/aboutScreen';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route component={MainScreen} path='/' exact></Route>
      <Route component={AboutScreen} path='/about'></Route>
    </Switch>
    </BrowserRouter>
  )
}

export default App;
