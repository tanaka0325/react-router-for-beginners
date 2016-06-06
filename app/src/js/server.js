import express from 'express';
import path from 'path';
import compression from 'compression';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes'

const app = express();
app.use(compression());

app.get('*', (req, res) => {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      const appHtml = renderToString(<RouterContext {...props} />)
      res.send(renderPage(appHtml))
    } else {
      res.status(404).send('Not Found...')
    }
  })
})

function renderPage(appHtml) {
  return `
  <!DOCTYPE html>
  <html>
      <head>
          <meta charset="utf-8">
          <title>React Router for Beginners.</title>
      </head>
      <body>
          <div id="content">${appHtml}</div>
      </body>
  </html>
  `
}

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log('Production Express server running at localhost:' + PORT)
})
