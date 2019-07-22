const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  console.log('Headers: ',req.headers);
  const { authorization } = req.headers;
  const [, token] = authorization.split(' ');

  jwt.verify(token, process.env.JWT_SECRET, function (err, payload) {
    if(err) {
      console.log(err);
    } else {
      req.merchant_id = payload.merchant_id;
      next();
    }
  });
}

module.exports = auth;