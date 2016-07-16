'use strict';

let System = require('es6-module-loader').System;

System.import('blog.js')
  .then((blog) => {
    console.log(blog);
  })
  .catch((err) => {
    console.log(err);
  });

System.import('app.js')
.then((app) => {})
.catch((err) => {
  console.log(err);
});
