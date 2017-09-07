const Promise = Promise || require('promise');
let superagent = require('superagent-promise')(require('superagent'), Promise);

function url(path) {
  return `https://localhost:5000/`
}

export default function getRequest(path) {
  return superagent
      .get(url(`/${path}`))
      .set('sessionId', cookie.session())
      .set('x-thg-client', 'checkout-ui')
      .end()
      .then(res => {
        return res.body;
      })
      .catch(err => {
        let error = {status: err.status, msg: err.response.text};
        return Promise.reject(error);
      });
}