import React from 'react';
import { Route } from 'react-router';

import App from './components/App'
import About from './components/About'
import ArticleList from './components/ArticleList'
import Article from './components/Article'

export default (
  <Route path="/" component={App}>
    <Route path="about" component={About} />
    <Route path="articles" component={ArticleList} />
    <Route path="articles/:id" component={Article} />
  </Route>
);
