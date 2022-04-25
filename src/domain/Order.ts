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

  public addItem(description: string, price: number, quantity: number): void {
    this.items.push(new Item(description, price, quantity));
  }

  public showItems(): Item[] {
    return this.items;
  }

  public addCupom(value: number): void {
    this.cupom = new Cupom(value);
  }

  public calculateTotal(): number {
    return new CalculateOrder(this.items, this.cupom).calculate();
  }
}
