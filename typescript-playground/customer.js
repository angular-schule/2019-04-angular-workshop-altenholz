"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    constructor(id) {
        this.id = id;
    }
    fooBar() {
        setTimeout(() => {
            console.log(`!! Timer...
                        
            ID ist ${this.id}!`);
        }, 2000);
        return '';
    }
}
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map