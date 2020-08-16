import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import SideMenu from './components/sidemenu/sidemenu';
import NeckPage from './pages/neck/neck.page';
import TransposingPage from './pages/transposing/transposing.page';

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <SideMenu />
        <Switch>
          <Route path='/neck' component={NeckPage} />
          <Route path='/transposing' component={TransposingPage} />
          <Redirect from='/' to='/neck' />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
