class OnlineShop {

    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace <= spaceRequired) {
            throw new Error("Not enough space in the warehouse.");
        }

        this.products.push({
            product,
            quantity
        });

        this.spaceRequired -= spaceRequired;

        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, minimalQuantity) {
        const findProduct = this.products.find(p => p.product == product);

        if (!findProduct) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        if (minimalQuantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        if (minimalQuantity <= findProduct.quantity) {
            return `You have enough from product ${product}.`
        } else {
            const diff = minimalQuantity - findProduct.quantity;
            findProduct.quantity = minimalQuantity;
            return `You added ${diff} more from the ${product} products.`;
        }
    }

    sellProduct(product) {
        const findProduct = this.products.find(p => p.product == product);

        if (!findProduct) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        findProduct.quantity--;

        this.sales.push({
            product,
            quantity: 1
        });

        return `The ${product} has been successfully sold.`;
    }

    revision() {
        if (this.sales.length == 0) {
            throw new Error('There are no sales today!');
        }

        const output = [
            `You sold ${this.sales.length} products today!`,
            'Products in the warehouse:'
        ];

        for (const { product, quantity } of this.products) {
            output.push(`${product}-${quantity} more left`);
        }

        return output.join('\n');
    }
}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());


