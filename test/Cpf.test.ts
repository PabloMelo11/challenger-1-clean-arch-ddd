import Cpf from '../src/domain/value-objects/Cpf';

describe('Cpf Suit Test', () => {
  it('should be able to return error when cpf length is less than 11', () => {
    expect(() => new Cpf('1134')).toThrow(new Error('Cpf invalid!'));
  });

  it('should be able to return error when cpf is invalid', () => {
    expect(() => new Cpf('')).toThrow(new Error('Cpf invalid!'));
  });

  it('should be able to return error when cpf length is greater than 14', () => {
    expect(() => new Cpf('1234567891234567')).toThrow(
      new Error('Cpf invalid!')
    );
  });

  it('should be able to return true when cpf is valid', () => {
    const newCpf = new Cpf('48103404810');
    expect(newCpf.cpf).toBe('48103404810');
  });
});
