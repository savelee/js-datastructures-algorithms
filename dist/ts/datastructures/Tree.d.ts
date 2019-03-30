/**
 * TreeNode DataStructure
 * @class TreeNode
 * @author Lee Boonstra
 *
 */
export declare class TreeNode {
    key: number;
    left: TreeNode;
    right: TreeNode;
    constructor(key: number, left?: TreeNode, right?: TreeNode);
}
/**
 * Tree DataStructure
 * @class Tree
 * @author Lee Boonstra
 *
 *      # What do we know about Trees?
 *      A Tree is a non-linear data structure where data objects
 *      are organized in terms of hierarchical relationship.
 *      The structure is non-linear in the sense that,
 *      unlike simple array and linked list implementation,
 *      data in a tree is not organized linearly. Each data
 *      element is stored in a structure called a node.
 *
 *      Think about an organization chart of family tree.
 *
 *      ## BinarySearchTree (BST)
 *      A Node in a Tree can have multiple branches. In a BST
 *      the BST Node can only have 2 branches. One on the left,
 *      and one on the right. They are ordered. The left branch
 *      have values that are <= (lower or equal) than the parent node.
 *      The right branch has values that are => than the parent node.
 *      Therefore each lookup, insertion or deletion takes time
 *      in proporsional to the logarithm (log) of the number of the
 *      total items in the tree. (You can skip half of the tree).
 *      O(log n) instead of O(n) when sorting an array. However it is
 *      slower than the operations than a hashtable O(1).
 *
 *      ## Depth First Search (DFS)
 *
 *      ## Breadth First Search (BFS)
 *
 *      ## Real world examples in Software Engineering?
 *      DOM (Document Object Model)
 */
export declare class BinarySearchTree {
    private root;
    constructor();
    /**
     * Get the Root Node Value
     * @returns {number | null} The Root Node Value
     */
    getRootNodeValue(): any;
    /**
     * Insert a node to a tree
     * @param {number} key
     */
    insert(key: number): void;
    /**
     * This method returns the minimum value/key in the tree
     */
    min(): number;
    /**
     * This method returns the maximum value/key in the tree
     */
    max(): number;
    /**
     * This method searches for the key in the tree. It
     * returns true if it exist and false if the node
     * does not exist.
     * @param {number} key - Key to search for
     */
    contains(key: number): boolean;
    /**
     * This method searches for the key in the tree. It
     * returns the TreeNode.
     * @param {number} key - Key to search for
     * @returns {TreeNode} - return node
     */
    find(key: number): TreeNode;
    /**
     * Removes a node in a tree.
     * @param {number} data
     */
    remove(key: number): void;
    /**
     * Get the Tree Min Height
     * Recursive Function
     * @param {TreeNode} node - (default) rootNode
     * @returns {number} minHeight - of the tree
     */
    getMinHeight(node?: TreeNode): number;
    /**
     * Get the Tree Max Height
     * @param {TreeNode} node - (default) rootNode
     * @returns {number} maxHeight - of the tree
     */
    getMaxHeight(node?: TreeNode): number;
    /**
     * Is Tree Balanced? A tree is balanced when the branches are equal or have 1 level difference.
     * @returns {boolean} if the Tree is Balanced
     */
    isBalanced(): boolean;
    /**
     * Traverse the tree
     * @param {object} opt
     * @param {string} opt.method - inOrder | preOrder | postOrder | levelOrder (default inOrder);
     * @returns {array} - sorted array
     */
    traverse(opt: any): any;
    /**
     * Traverses nodes of a tree with DFS
     * @returns {array} - return an inorder array
     */
    inorder(): any[];
    /**
     * Traverses nodes of a tree with BFS
     * @returns {array} - return an preorder array
     */
    preorder(): any[];
    /**
     * Traverses nodes of a tree with BFS
     * @returns {array} - return an postorder array
     */
    postorder(): any[];
    /**
     * Traverses nodes for each level
     * @returns {array} - return an level order array
     */
    levelorder(): any;
}
