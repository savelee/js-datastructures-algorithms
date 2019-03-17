export class Stack {
    private items: any;
    private count: 0;

    constructor() {
        this.items = [];
        this.count = 0;
    }

    push() {
        console.log('push');
        console.log(this.items);
        console.log(this.count);
    }
}
