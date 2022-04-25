import Item from './Item';
import Cupom from './Cupom';
import CalculateOrder from './CalculateOrder';

import Cpf from './value-objects/Cpf';

export default class Order {
  public cpf: Cpf;
  public items: Item[];
  public cupom?: Cupom;

  constructor(cpf: string) {
    this.cpf = new Cpf(cpf);
    this.items = [];
  }

  addItem(description: string, price: number, quantity: number) {
    this.items.push(new Item(description, price, quantity));
  }

  showItems() {
    return this.items;
  }

  addCupom(value: number) {
    this.cupom = new Cupom(value);
  }

  calculateTotal() {
    return new CalculateOrder(this.items, this.cupom).calculate();
  }
}
