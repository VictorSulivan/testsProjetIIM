interface Product {
  name: string;
  price: number;
}

export class Cart {
  private products: Product[] = [];

  addProduct(name: string, price: number): void {
    this.products.push({ name, price });
  }

  getTotal(): number {
    const total = this.products.reduce((sum, { price }) => sum + price, 0);
    return this.applyDiscount(total);
  }

  private applyDiscount(total: number): number {
    const DISCOUNT_THRESHOLD = 100;
    const DISCOUNT_RATE = 0.1;
    return total > DISCOUNT_THRESHOLD ? total * (1 - DISCOUNT_RATE) : total;
  }
}
