'use strict';

module.exports = (req, res, next) => {
  console.log('inside 404');
  res.status(404).send('Page not found');
  next();
};
