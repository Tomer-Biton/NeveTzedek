// MongoDB Playground
// Create a new database called IceCreamProducts and a collection called Ice Cream Flavors.
// The current database to use.
use('IceCreamProducts');

// Create a new document in the collection.
db.getCollection('Ice Cream Flavors').insertOne({
  flavors: [
    {
      flavor: 'Vanilla',
      price: 1.5,
      available: true,
    },
    {
      flavor: 'Chocolate',
      price: 2.0,
      available: true,
    },
    {
      flavor: 'Strawberry',
      price: 2.5,
      available: false,
    },
  ],
});