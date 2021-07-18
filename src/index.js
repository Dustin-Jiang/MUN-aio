import 'core-js/es';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable'
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, MemoryRouter, Switch } from 'react-router-dom';

import Home from './Home/Home';
import Login from './Login';
import Exit from "./Exit";
import PageFile from './File/File';
import CommandBar from './AppBar';
import CommandList from './CommandList/CommandList';
import News from './News/News';
import Setting from './Setting';
import { Grid } from '@material-ui/core';
import AuthRoute from './util/AuthRoute';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <CommandBar />
          <Login />
        </Route>
        <AuthRoute>
          <Route exact path="/">
            <CommandBar />
            <Home />
          </Route>
          <Route path="/file">
            <CommandBar />
            <PageFile />
          </Route>
          <Route path="/news">
            <CommandBar />
            <News />
          </Route>
          <Route path="/exit">
            <Exit />
          </Route>
          <Route path="/settings">
            <CommandBar />
            <Setting />
          </Route>
          <Route path="/commandlist">
            <Grid container
              direction="column"
              justify="top"
              wrap="nowrap"
              style={{ height: `${100}%` }}>
              <CommandBar />
              <CommandList />
            </Grid>
          </Route>
        </AuthRoute>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
