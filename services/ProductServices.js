const PRODUCTS = [
    {
        id: 1,
        name: 'African Doughnut Mix',
        price: 30,
        image: require('../assets/african-donut.png'),
        description: 'Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o....'

    },
    {
        id: 2,
        name: 'Efo Riro',
        price: 30,
        image: require('../assets/products/car-101.jpg'),
        description: 'Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o....'

    },
    {
        id: 3,
        name: 'SweetHome Cupcake',
        price: 30,
        image: require('../assets/products/cake-102.jpg'),
        description: 'Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o....'

    },
    {
        id: 4,
        name: 'SweetHome Cupcake',
        price: 30,
        image: require('../assets/products/cake-102.jpg'),
        description: 'Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o....'

    },
    {
        id: 5,
        name: 'SweetHome Cupcake',
        price: 30,
        image: require('../assets/products/cake-102.jpg'),
        description: 'Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o....'

    },
    {
        id: 6,
        name: 'SweetHome Cupcake',
        price: 30,
        image: require('../assets/products/cake-102.jpg'),
        description: 'Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o....'

    }

];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}