import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, MemoryRouter, Switch } from 'react-router-dom';

import Home from './Home/Home';
import PageFile from './File/File';
import CommandBar from './AppBar';
import CommandList from './CommandList/CommandList';
import { Grid } from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <CommandBar />
          <Home />
        </Route>
        <Route path="/file">
          <CommandBar/>
          <PageFile/>
        </Route>
        <Route path="/commandlist">
          <Grid container
            direction="column"
            justify="top"
            alignItems="top"
            wrap="nowrap"
            style={{height: `${100}%`}}>
            <CommandBar />
            <CommandList />
          </Grid>
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
