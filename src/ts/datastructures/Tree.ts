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
     * Get the Tree Min Height
     * Recursive Function
     * @param {TreeNode} node - (default) rootNode
     * @returns {number} minHeight - of the tree
     */
    getMinHeight(node = this.root): number {
        if (node == null) {
            // every time when you reach the leaf node
            // return -1, so it's a number;
            return -1;
        }

        // when node is not null, so it's not a leaf
        // call this function again, passing in the
        // previous node, that way you are walking
        // through all the lefts, and all the rights.
        let leftBranch = this.getMinHeight(node.left);
        let rightBranch = this.getMinHeight(node.right);

        // when the left branche is smaller
        // start walking left, otherwise
        // walk through the right branche
        // and start counting (+1) till the end (null)

        // the branch that's the smallest
        // will contain the min height
        if (leftBranch < rightBranch) {
            return leftBranch + 1;
        } else {
            return rightBranch + 1;
        }
    }

    /**
     * Get the Tree Max Height
     * @param {TreeNode} node - (default) rootNode
     * @returns {number} maxHeight - of the tree
     */
    getMaxHeight(node = this.root): number {
        if (node == null) {
            // every time when you reach the leaf node
            // return -1, so it's a number;
            return -1;
        }

        // when node is not null, so it's not a leaf
        // call this function again, passing in the
        // previous node, that way you are walking
        // through all the lefts, and all the rights.
        let leftBranch = this.getMaxHeight(node.left);
        let rightBranch = this.getMaxHeight(node.right);

        // when the left branche is bigger
        // start walking left, otherwise
        // walk through the right branche
        // and start counting (+1) till the end (null)

        // the branch that's the biggest
        // will contain the max height
        if (leftBranch > rightBranch) {
            return leftBranch + 1;
        } else {
            return rightBranch + 1;
        }
    }

    /**
     * Is Tree Balanced? A tree is balanced when the branches are equal or have 1 level difference.
     * @returns {boolean} if the Tree is Balanced
     */
    isBalanced(): boolean {
        return(this.getMinHeight()
            >= this.getMaxHeight() - 1);
    }

    /**
     * Get the Tree Max Height
     * @param {object} opt
     * @param {string} opt.method - inOrder | preOrder | postOrder | levelOrder (default inOrder); 
     * @returns {array} - sorted array
     */
    traverse(opt: any): any {
        let array = new Array();
        let method = "";
        if (opt.method) {
            method = opt.method.toLowerCase();
        }
        console.log(method);
        switch (method) {
            case "inorder":
                array = this.inorder();
                break;
            case "preorder":
                array = this.preorder();
                break;
            case "postorder":
                array = this.postorder();
                break;
            case "levelorder":
                array = this.levelorder();
                break;
            default:
                array = this.inorder();
        }

        return array;
    }

    /**
     * Traverses nodes of a tree with DFS
     * @returns {array} - return an inorder array
     */
    inorder(): any[] {
        if (this.root == null) {
            // check if there's a BST
            // and if there are values
            // in it
            console.log("root = null");
            return null;
        } else {
            let result = new Array();
            // recursive function
            function traverseInOrder(node: TreeNode) {
                // we start from the root node.

                // if the current node has a node.left
                // then call this function
                // again but pass in the left node
                // else ignore
                // if (node.left) console.log("execute if node " + node.key + " has a left: " + node.left.key);
                node.left && traverseInOrder(node.left);

                // and then add the value to the array
                // so for everytime you called the 
                // function, you still will add values
                // to the array
                // console.log("push in array " + node.key);
                result.push(node.key);

                // next, check if the current node has
                // a right node. else ignore
                // in case not, go up
                // pass that node to the array

                // if node.right does exist call this function
                // again but pass in the right node
                // if (node.right) console.log("execute if node " + node.key + " has a right: " + node.right.key);
                node.right && traverseInOrder(node.right);
            }
            traverseInOrder(this.root);
            return result;
        }
    }

    /**
     * Traverses nodes of a tree with BFS
     * @returns {array} - return an preorder array
     */
    preorder(): any[] {
        if (this.root == null) {
            // check if there's a BST
            // and if there are values
            // in it
            return null;
        } else {
            let result = new Array();
            // recursive function
            function traversePreOrder(node: TreeNode) {
                // add the key in the results array
                result.push(node.key);
                // if node.left exist call this function
                // again but pass in the left node
                node.left && traversePreOrder(node.left);
                // if node.right exist call this function
                // again but pass in the right node
                node.right && traversePreOrder(node.right);
            }
            traversePreOrder(this.root);
            return result;
        }
    }

    /**
     * Traverses nodes of a tree with BFS
     * @returns {array} - return an postorder array
     */
    postorder(): any[] {
        if (this.root == null) {
            // check if there's a BST
            // and if there are values
            // in it
            return null;
        } else {
            let result = new Array();
            // recursive function
            function traversePostOrder(node: TreeNode) {
                // if node.left exist call this function
                // again but pass in the left node
                node.left && traversePostOrder(node.left);
                // if node.right exist call this function
                // again but pass in the right node
                node.right && traversePostOrder(node.right);
                // add the key in the results array
                result.push(node.key);
            }
            traversePostOrder(this.root);
            return result;
        }
    }

    /**
     * Traverses nodes for each level
     * @returns {array} - return an level order array
     */
    levelorder(): any {
        let results = [];
        let queue = [];
        if (this.root != null) {
            queue.push(this.root);
            // now we will loop
            // as long as there are
            // items in the queue
            while (queue.length > 0) {
                let node = queue.shift();
                // takes the first element in the
                // array and remove that element
                // so we will start with the rootnode
                // in the queue. and after shifting
                // it's not in the queue anymore

                // we can put the key in the results array
                results.push(node.key);

                if (node.left != null) {
                    // console.log(node.key + " has a left node: " + node.left.key)
                    // when there is a left node
                    // we can put it to the queue
                    // so the while loop won't stop
                    queue.push(node.left);
                }
                if (node.right != null) {
                    // console.log(node.key + " has a right node: " + node.right.key)
            
                    // when there is a right node
                    // we can put it to the queue
                    // so the while loop won't stop
                    queue.push(node.right);
                }

                // when there are items in the queue,
                // we can start adding it to the results
                // array, and start checking for the next
                // level.
            }
            return results;
        } else {
            return null;
        }
    }
}