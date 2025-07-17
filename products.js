const db = require('../databaseconnection');

function getAllProducts() {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) throw err;
    console.log('All Products:', results);
  });
}

function deleteProduct(name) {
  db.query('DELETE FROM products WHERE name = ?', [name], (err, result) => {
    if (err) throw err;
    console.log(`Deleted product '${name}'`, result);
  });
}

function insertProduct(name, price, category) {
  db.query(
    'INSERT INTO products (name, price, category) VALUES (?, ?, ?)',
    [name, price, category],
    (err, result) => {
      if (err) throw err;
      console.log('Product inserted:', { name, price, category });
    }
  );
}

function updateProduct(id, newData) {
  const { name, price, category } = newData;
  db.query(
    'UPDATE products SET name = ?, price = ?, category = ? WHERE id = ?',
    [name, price, category, id],
    (err, result) => {
      if (err) throw err;
      console.log(`Updated product ID ${id}:`, newData);
    }
  );
}

module.exports = {
  getAllProducts,
  deleteProduct,
  insertProduct,
  updateProduct
};
