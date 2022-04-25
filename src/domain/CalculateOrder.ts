import Item from './Item';
import Cupom from './Cupom';

export default class CalculateOrder {
  private readonly DIVISOR = 100;

  constructor(readonly items: Item[], readonly cupom?: Cupom) {}

  public calculate(): number {
    let totalOrder = this.items.reduce((total, item) => {
      return (total += item.price * item.quantity);
    }, 0);

    if (this.cupom) {
      const discount = (totalOrder * this.cupom.value) / this.DIVISOR;

      totalOrder -= discount;
    }

    return Math.round(totalOrder);
  }
}
