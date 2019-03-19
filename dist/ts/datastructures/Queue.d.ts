export declare class Queue {
    private items;
    private total;
    private count;
    constructor();
    add(item: any): void;
    remove(): any;
    peek(): any;
    isEmpty(): Boolean;
    clear(): void;
    size(): number;
    values(): any[];
}
