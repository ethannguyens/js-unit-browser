import PrimeNumber from './prime-number';
const assert = require('assert');

describe('Prime Number', () => {
  it('should tell wether a given numver is prime', () => {
    //arrange
    const n = 198;

    //act
    const isPrime = PrimeNumber.isPrime(n);

    //assert
    assert.equal(false, isPrime);
  });

  it('should return an object with correct prime result', () => {
    //arrange
    const obj = {
      a: {
        count: 198
      }
    };

    //act
    const newObj = PrimeNumber.getPrimeWords(obj);

    //assert
    assert.equal(false, newObj['a'].prime);
  });
});