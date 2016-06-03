import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App'
import About from './components/About'
import ArticleList from './components/ArticleList'
import Article from './components/Article'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="articles" component={ArticleList} />
      <Route path="articles/:id" component={Article} />
    </Route>
    <Route path="*" component={App}/>
  </Router>
), document.getElementById('content'))
