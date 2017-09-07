const expect = require('chai').expect;
let ExampleInjectLoader = require('inject-loader!./js-loader-example');

describe('JS Loader example', () => {
  it('it should always return true with mock function', () => {
    //arrange
    const mockPrimeNumber = {
      isPrime: (n) => true
    };

    let example = ExampleInjectLoader({
      './prime-number' : mockPrimeNumber
    });

    //act
    const prime = example(9);

    //assert
    expect(prime).equals(true);
  })
});