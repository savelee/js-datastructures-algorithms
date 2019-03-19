export declare class Stack {
    private items;
    private total;
    constructor();
    push(item: any): void;
    pop(): any;
    peek(): any;
    isEmpty(): Boolean;
    clear(): void;
    size(): number;
    values(): any[];
}
