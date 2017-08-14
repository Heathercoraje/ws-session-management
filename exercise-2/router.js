'use strict';

const {
  readFile
} = require('fs');
const cookie = require('cookie');
const jwt = require('jsonwebtoken');

const notFoundPage = '<p style="font-size: 10vh; text-align: center;">404!</p>';

module.exports = (req, res) => {
switch (`${req.method} ${req.url}`) {
  case 'GET /':
    return readFile(
      './index.html',
      (err, data) => {
        res.writeHead(
          200, {
            'Content-Type': 'text/html',
            'Content-Length': data.length
          }
        );
        return res.end(data);
      }
    );
  case 'POST /login':
    res.writeHead(
      302, {
        'location': '/',
        'Set-Cookie': 'logged_in=true; HttpOnly; Max-Age=1000'
      });
    return res.end('login!');

  case 'POST /logout':
    jwt.sign({
      name: 'king'
    }, 'king is grumpy');
    res.writeHead(
      302, {
        'location': '/',

        //'Set-Cookie': 'logged_in=false; HttpOnly; Max-Age=1000'
      });
    return res.end('logout!');

  case 'GET /auth_check':
    if (req.headers.cookie.match(/logged_in=true/)) {
      case 'POST /login':
        res.writeHead(
          302, {
            'location': '/',
            'Set-Cookie': 'logged_in=true; HttpOnly; Max-Age=1000'
          });
        return res.end('login!');

      case 'POST /logout':
        res.writeHead(
          302, {
            'location': '/',
            'Set-Cookie': 'logged_in=false; HttpOnly; Max-Age=1000'
          });
        return res.end('logout!');

      case 'GET /auth_check':
        if (req.headers.cookie.match(/logged_in=true/)) {
          res.writeHead(
            200, {
              'Content-Type': 'text/html'
            });
          return res.end('you are vertified');
        } else {
          res.writeHead(401, 'Content-Type: text/html');
          return res.end('you are out');
        }
        res.writeHead(
          200, {
            'Content-Type': 'text/html'
          });
        return res.end('you are vertified');
    } else {
      res.writeHead(401, 'Content-Type: text/html');
      return res.end('you are out');
    }
  default:
    res.writeHead(
      404, {
        'Content-Type': 'text/html',
        'Content-Length': notFoundPage.length
      }
    );
    return res.end(notFoundPage);
}
}
FoundPage);
}
}
