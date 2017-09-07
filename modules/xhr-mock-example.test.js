const mock = require('xhr-mock');
const expect = require('chai').expect;
import getRequest from 'xhr-mock-example';

describe('xhr mock test', () => {
  it('it should response ok', () => {
    //arrange
    const test = {test: 'value'};
    mock.get(`https://localhost:5000/test`, function (req, res) {
      return res
          .status(200)
          .header('Content-Type', 'application/json')
          .body(JSON.stringify(test));
    });
    //act and assert

    getRequest('test').then((res) => {
      expect(res).to.eql(test);
    })

  })

});