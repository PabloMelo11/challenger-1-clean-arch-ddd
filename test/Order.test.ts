import Order from '../src/domain/Order';

describe('Order Suit Test', () => {
  it('should be able to add items in order', () => {
    const order = new Order('48103404810');

    order.addItem('Chocolate', 10, 1);
    order.addItem('Play 5', 5000, 1);

    const items = order.showItems();

    expect(items).toEqual([
      { description: 'Chocolate', price: 10, quantity: 1 },
      { description: 'Play 5', price: 5000, quantity: 1 },
    ]);
  });

  it('should be able to calculate order correct without cupom', () => {
    const order = new Order('48103404810');

    order.addItem('Play', 5000, 1);
    order.addItem('Chocolate', 4, 2);

    const total = order.calculateTotal();

    expect(total).toBe(5008);
  });

  it('should be able to add cupom in order and calculate correct', () => {
    const order = new Order('48103404810');

    order.addItem('Play', 5000, 1);
    order.addCupom(15);

    const total = order.calculateTotal();

    expect(total).toBe(4250);
  });

  it('should not be able create order when cpf is incorrect', () => {
    expect(() => new Order('')).toThrow(new Error('Cpf invalid!'));
  });

  it('should be able to create a new order with 3 itens', () => {
    const order = new Order('48103404810');

    order.addItem('PlayStation 5', 5000, 1);
    order.addItem('Chocolate', 4, 2);
    order.addItem('MacBook Air', 10000, 1);
    order.addCupom(20);

    const total = order.calculateTotal();

    expect(total).toBe(12006);
  });
});
