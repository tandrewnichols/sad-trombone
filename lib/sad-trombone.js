var trombone = require('trombone');

exports.throw = function(error) {
  try {
    trombone.play();
  } catch (e) {

  }

  throw error;
};
