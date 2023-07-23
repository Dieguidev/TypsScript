import { faker } from '@faker-js/faker/locale/es';

import { addProduct, products, updateProduct } from './products/product.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    description: faker.commerce.productDescription(),
    title: faker.commerce.productName(),
    image: faker.image.url(),
    stock: faker.number.int({ min: 10, max: 100 }),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(['new', 'white', 'tshirt', 'clothes']),
    categoryId: faker.datatype.uuid.toString()
  });
}

console.log(products);

const product =products[0];
updateProduct(product.id, {
  title: 'New title',
  stock: 80,
  createdAt: new Date(),
  id: '1212'
})

