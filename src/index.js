import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, MemoryRouter, Switch } from 'react-router-dom';

import Home from './Home/Home';
import PageFile from './File/File';
import CommandBar from './AppBar';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <CommandBar />
          <Home/>
        </Route>
        <Route path="/file">
          <CommandBar/>
          <PageFile/>
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
