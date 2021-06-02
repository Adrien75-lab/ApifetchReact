import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Article from './Article';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
    <Route path="/article/:id" component={Article} />
    <Route path="/" component={App} />
    </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);