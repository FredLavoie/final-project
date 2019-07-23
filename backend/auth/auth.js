const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const { authorization } = req.headers;
  // const [, token] = authorization.split(' ');

  jwt.verify(authorization, process.env.JWT_SECRET, function (err, payload) {
    if(err) {
      console.log(err);
    } else {
      req.merchant_id = payload.merchant_id;
      next();
    }
  });
}

module.exports = auth;


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
// {"alg":"HS256","typ":"JWT"}

// eyJtZXJjaGFudF9pZCI6MSwiaWF0IjoxNTYzODE3MzUyLCJleHAiOjE1NjM5MDM3NTJ9
// {"merchant_id":1,"iat":1563817352,"exp":1563903752}

// e8TDLovD7X81JZXeff5ZsVaUGBR4i4y_JbJIkLvyO-E
