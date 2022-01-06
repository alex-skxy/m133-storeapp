class Product {
    constructor(id, name, description, basePrice, salePrice, image) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.basePrice = basePrice;
        this.salePrice = salePrice;
        this.image = image;
    }
}

const products = [new Product('1', 'apple', 'a very cool apple', 5.0, 6.9, ''),
    new Product('2', 'orange', 'a very cool orange', 4.0, 3.80, '')];

const getProducts = async () => {
    return products;
};

const getProduct = async id => {
    return products.find(p => p.id === id);
};
