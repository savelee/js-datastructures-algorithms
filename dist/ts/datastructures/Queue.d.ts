export declare class Queue {
    private items;
    private count;
    constructor();
    add(item: any): void;
    remove(): any;
    peek(): any;
    isEmpty(): boolean;
    clear(): void;
    size(): number;
    values(): any[];
}
