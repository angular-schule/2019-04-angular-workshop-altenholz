export class Customer {
    name: string;

    constructor(private id: number) { }

    fooBar(): string {
        setTimeout(() => {
            console.log(`!! Timer...
                        
            ID ist ${this.id}!`);
        }, 2000);

        return '';
    }
}