/**
 * TreeNode DataStructure
 * @class TreeNode
 * @author Lee Boonstra
 *
 */
export class TreeNode {
    public key: number;
    public left: TreeNode;
    public right: TreeNode;

    constructor(key: number, left: TreeNode = null, right: TreeNode = null) {
        this.key = key;
        this.left = left;
        this.right = right
    }
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
 *      ![Info Graphic](../../../docs/cheatsheets/Tree.png "Info Graphic")

 */
export class BinarySearchTree {
    private root: TreeNode;

    constructor() {
        this.root = null;
    }

    // findMinNode()
    // search(node, data)

    /**
     * Get the Root Node Value
     * @returns {number | null} The Root Node Value
     */
    getRootNodeValue(): any {
        let key = null;
        if (this.root !== null) {
            key = this.root.key;
        }
        return key;
    }

    /**
     * Insert a node to a tree
     * @param {number} key
     */
    insert(key: number) {
        const node = this.root;
        if (node == null) {
            // this is the root node
            // create a node based on this key
            this.root = new TreeNode(key)
            return;
        } else {
            // it's not the root node,
            // so we will need to figure
            // where to place this in the tree.
            // let's use a recursive funciton
            const searchTree = function(node: TreeNode): void {
                // the key is smaller the parent node
                if (key < node.key) {
                    // when there are no nodes on the left side
                    // we can start creating a node
                    if (node.left == null) {
                        // put it on the left side of the tree
                        node.left = new TreeNode(key);
                        return;
                    } else if (node.left !== null) {
                        // there are already nodes on the left
                        // so we use a recursive function
                        // passing in the node.left we just saw
                        searchTree(node.left)
                    }
                } else if (key > node.key) {
                    // when there are no nodes on the right side
                    // we can start creating a node
                    if (node.right == null) {
                        // put it on the right side of the tree
                        node.right = new TreeNode(key);
                        return;
                    } else if (node.right !== null) {
                        // there are already nodes on the right
                        // so we use a recursive function
                        // passing in the node.right we just saw
                        searchTree(node.right)
                    } else {
                        // the key must be equal. we won't add
                        // it to the tree, we skip duplicates
                        return null;
                    }
                }
            }
            // we will call the function
            return searchTree(node);
        }
    }

    /**
     * This method returns the minimum value/key in the tree
     */
    min(): number {
        let current = this.root;
        // a while loop, continue searching
        // till you are on the end of the left branch
        while (current.left !== null && current.left !== undefined) {
            current = current.left;
        }
        return current.key;
    }

    /**
     * This method returns the maximum value/key in the tree
     */
    max(): number {
        let current = this.root;
        // a while loop, continue searching
        // till you are on the end of the left branch
        while (current.right != null) {
            current = current.right;
        }
        return current.key;
    }

    /**
     * This method searches for the key in the tree. It
     * returns true if it exist and false if the node
     * does not exist.
     * @param {number} key - Key to search for
     */
    contains(key: number): boolean {
        return (this.find(key) !== null)
    }

    /**
     * This method searches for the key in the tree. It
     * returns the TreeNode.
     * @param {number} key - Key to search for
     * @returns {TreeNode} - return node
     */
    find(key: number): TreeNode {
        let current = this.root;
        // when the current node is not null
        while (current) {
            // is it the current key?
            if (key === current.key) {
                // yep, found it
                return current;
            } else if (key < current.key) {
                // value is lower than the parent
                // let's look left
                current = current.left;
            } else {
                // value is higher than the parent
                // let's look right
                current = current.right;
            }
            // haven't found it so continue looking
        }
        // we didn't find it, the key might be not in the tree
        return null;
    }

    /**
     * Removes a node in a tree.
     * @param {number} data
     */
    remove(key: number) {
        const removeNode = function(node: TreeNode, key: number): TreeNode {
            if (node == null) {
                // we have an empty tree
                return null;
            }
            // can we find the data in the tree
            if (key === node.key) {
                // when the value is in the tree,
                // there are 4 options:

                // 1)
                // node has no children, means its a leaf node
                // we can just delete that node by setting
                // the data of that node to null. (removing pointers)
                if (node.left === null && node.right === null) {
                    return null;
                }

                // 2)
                // node has no left child
                // we will replace pointers
                // the parent node will get
                // the right node from the to be deleted node
                // as a new pointer
                if (node.left === null) {
                    return node.right;
                }

                // 3)
                // node has no right child
                // we will replace pointers
                // the parent node will get
                // the left node from the to be deleted node
                // as a new pointer
                if (node.right === null) {
                    return node.left;
                }

                // 4)
                // node has both children
                // this is a bit more complicated
                // cause you can't replace pointers
                // of one, cause what would happen to the
                // other child.

                // we will first look to the right node
                let tempNode = node.right;
                // and find the min in the branch by
                // looking all the way left
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                };
                // the node that will need to be deleted
                // gets the node data from the tempNode
                // the one from all the way left
                node.key = tempNode.key;

                // and we will need to go back in this function
                // again to make sure we re-link all the other
                // pointers
                node.right = removeNode(node.right, tempNode.key);
                return node;
            } else if (key < node.key) {
                node.left = removeNode(node.left, key);
                return node;
            } else {
                node.right = removeNode(node.right, key);
                return node;
            }
        }
        // call the recursive function, start with the root
        this.root = removeNode(this.root, key);
    }


    /**
     * Get the Tree Height
     * @param {Function} callback
     */
    getHeight(callback: Function): void {

    }

    /**
     * Traverses nodes of a tree with DFS
     * @param {Function} callback
     */
    inorder(callback: Function): void {

    }

    /**
     * Traverses nodes of a tree with BFS
     * @param {Function} callback
     */
    preorder(callback: Function): void {

    }

    /**
     * Traverses nodes of a tree with BFS
     * @param {Function} callback
     */
    postorder(callback: Function): void {

    }
}