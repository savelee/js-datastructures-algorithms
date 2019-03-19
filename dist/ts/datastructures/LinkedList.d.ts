export declare class Node {
    node: Node;
    next: Node;
    constructor(item: any);
}
export declare class LinkedList {
    private head;
    private total;
    constructor();
    push(item: any): Boolean;
    insert(index: number, item: any): Boolean;
    getHead(): Node;
    setHead(node: Node): void;
    indexOf(item: any): number;
    getNodeAt(index: number): Node;
    remove(item: any): Boolean;
    removeAt(index: number): Boolean;
    size(): number;
    isEmpty(): boolean;
    values(): any[];
}
