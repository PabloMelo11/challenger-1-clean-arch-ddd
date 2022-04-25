export default class Cpf {
  private readonly DIVISOR = 11;
  private readonly MIN_REST_DIVISION = 2;
  private readonly INITIAL_NUMBER_MULTIPLICATE_FIRST_DIGIT = 10;
  private readonly INITIAL_NUMBER_MULTIPLICATE_SECOND_DIGIT = 11;

  constructor(readonly cpf: string) {
    if (!this.isValidate(cpf)) throw new Error('Cpf invalid!');
  }

  hasValue(cpf: string): boolean {
    return cpf !== null || cpf !== undefined || cpf !== '';
  }

  isValidateLength(cpf: string): boolean {
    return cpf.length > 10 && cpf.length < 15;
  }

  calculateRestDivisor(multiplicationSum: number): number {
    const restDivision = multiplicationSum % this.DIVISOR;

    return restDivision < this.MIN_REST_DIVISION
      ? 0
      : this.DIVISOR - restDivision;
  }

  calculateDigit(digits: string, initialNumberMultiplicate: number): number {
    let multiplicationSum = 0;
    let multiplicationNumber = initialNumberMultiplicate;

    for (const currentDigit of digits) {
      const digit = parseInt(currentDigit);
      multiplicationSum = multiplicationSum + multiplicationNumber * digit;
      multiplicationNumber -= 1;
    }

    return this.calculateRestDivisor(multiplicationSum);
  }

  isValidate(cpf: string): boolean {
    const cpfNumbersOnly = cpf
      .replace('.', '')
      .replace('.', '')
      .replace('-', '')
      .replace(' ', '');

    if (!this.hasValue(cpf) || !this.isValidateLength(cpf)) return false;

    const nineDigits = cpfNumbersOnly.substring(0, 9);
    const firstDigit = this.calculateDigit(
      nineDigits,
      this.INITIAL_NUMBER_MULTIPLICATE_FIRST_DIGIT
    );

    const tenDigits = `${nineDigits}${firstDigit}`;
    const secondDigit = this.calculateDigit(
      tenDigits,
      this.INITIAL_NUMBER_MULTIPLICATE_SECOND_DIGIT
    );

    const finalDigits = `${firstDigit}${secondDigit}`;

    const totalLengthCpf = cpfNumbersOnly.length;
    const lastLengthTwoNumbersCpf = cpfNumbersOnly.length - 2;

    const lastTwoNumbersCpf = cpfNumbersOnly.substring(
      lastLengthTwoNumbersCpf,
      totalLengthCpf
    );

    return finalDigits === lastTwoNumbersCpf;
  }
}
