export class Cart {
  private products: { name: string; price: number }[] = [];

  addProduct(name: string, price: number) {
    this.products.push({ name, price });
  }

  getTotal(): number {
    const total = this.products.reduce((sum, p) => sum + p.price, 0);
    return total > 100 ? total * 0.9 : total;
  }
}
