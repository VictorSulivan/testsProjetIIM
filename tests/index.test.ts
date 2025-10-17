import { Cart } from "../src/cart";

describe("Cart", () => {
  it("ajoute un produit et calcule le total", () => {
    const cart = new Cart();
    cart.addProduct("Livre", 30);
    expect(cart.getTotal()).toBe(30);
  });

  it("calcule le total avec plusieurs produits", () => {
    const cart = new Cart();
    cart.addProduct("Livre", 30);
    cart.addProduct("Stylo", 10);
    expect(cart.getTotal()).toBe(40);
  });

  it("applique une réduction de 10% si le total dépasse 100 €", () => {
    const cart = new Cart();
    cart.addProduct("Casque", 120);
    expect(cart.getTotal()).toBe(108); // 120 - 10%
  });

  it("n’applique pas de réduction si le total est <= 100 €", () => {
    const cart = new Cart();
    cart.addProduct("T-shirt", 50);
    cart.addProduct("Pantalon", 50);
    expect(cart.getTotal()).toBe(100);
  });
});
