import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import SideMenu from './components/sidemenu/sidemenu';
import NeckPage from './pages/neck/neck.page';
import TransposingPage from './pages/transposing/transposing.page';
import routes from './consts/routes';

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <SideMenu />
        <Switch>
          <Route path={`/${routes.neck}`} component={NeckPage} />
          <Route path={`/${routes.transposing}`} component={TransposingPage} />
          <Redirect from='/' to={`/${routes.default}`} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
