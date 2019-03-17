export class Queue {
    private items: any;
    private count: 0;

    constructor() {
        this.items = [];
        this.count = 0;
    }

    init() {
        console.log('queue');
    }
}
