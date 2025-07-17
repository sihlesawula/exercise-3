
const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',         
  password: 'Timocruz1999',           
  database: 'shopleft_database'
});


connection.connect(err => {
  if (err) throw err;
  console.log('Connected to SHOPLEFT database!\n');
});


function getAllUsers() {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    console.log('Users:');
    console.log(results);
  });
}


function getAllProducts() {
  connection.query('SELECT * FROM products', (err, results) => {
    if (err) throw err;
    console.log('Products:');
    console.log(results);
  });
}


function deleteProductBaro() {
  connection.query("DELETE FROM products WHERE name = 'baro'", (err, results) => {
    if (err) throw err;
    console.log(`Deleted 'baro':`, results);
  });
}


function insertNewProduct() {
  const name = 'pizza';
  const price = 80.00;
  connection.query('INSERT INTO products (name, price) VALUES (?, ?)', [name, price], (err, results) => {
    if (err) throw err;
    console.log('Inserted product:', { name, price });
  });
}


function updateProduct() {
  const newPrice = 18.50;
  const productName = 'bread';
  connection.query('UPDATE products SET price = ? WHERE name = ?', [newPrice, productName], (err, results) => {
    if (err) throw err;
    console.log(`Updated '${productName}' price to ${newPrice}`);
  });
}


getAllUsers();
getAllProducts();
