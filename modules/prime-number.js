class PrimeNumber {
  constructor() {
    this.getPrimeWords = this.getPrimeWords.bind(this);
    this.isPrime = this.isPrime.bind(this);
  }

  /**
   * Get the prime words
   * @param obj
   * @returns {{}}
   */
  static getPrimeWords(obj) {
    let primeWords = {...obj};

    for (let key in primeWords) {
      primeWords[key].prime = this.isPrime(obj[key].count);
    }

    return primeWords;
  }

  /**
   * Check if a given number is prime
   * @param n
   * @returns {boolean}
   */
  static isPrime(n) {
    let divisor = 2;

    while (n > divisor) {
      if (n % divisor === 0) return false;
      else divisor++;
    }

    return true;
  }
}

export default PrimeNumber;
