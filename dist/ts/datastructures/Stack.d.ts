export declare class Stack {
    private items;
    private total;
    constructor();
    push(item: any): void;
    pop(): any;
    peek(): any;
    isEmpty(): boolean;
    clear(): void;
    size(): number;
    values(): any[];
}
