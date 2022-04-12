const db = require("../util/db");

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(
      "INSERT INTO products (title, price, description, imageUrl) VALUES (?, ?, ?, ?)",
      [this.title, this.price, this.description, this.imageUrl]
    );
  }

  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }

  static findById(id) {
    return db.execute("SELECT * FROM products WHERE products.id = ?", [id]);
  }

  static findByIdAndUpdate(id, product) {
    return db.execute(
      "UPDATE products SET title = ?, price = ?, description = ?, imageUrl = ? WHERE id = ?",
      [product.title, product.price, product.description, product.imageUrl, id]
    );
  }

  static deleteproductbyID(id) {
    return db.execute("DELETE FROM products WHERE id = ?", [id]);
  }
};
