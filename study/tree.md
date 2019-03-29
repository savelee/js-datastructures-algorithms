# What do we know about Trees?

A Tree is a non-linear data structure where data objects are organized in terms of hierarchical relationship.
The structure is non-linear in the sense that, unlike simple array and linked list implementation, data in a tree is not organized linearly. Each data element is stored in a structure called a node.

Think about an organization chart of family tree.

## BinarySearchTree (BST)

A Node in a Tree can have multiple branches. In a BST the BST Node can only have 2 branches. One on the left,
and one on the right. They are ordered. The left branch have values that are <= (lower or equal) than the parent node.

The right branch has values that are => than the parent node. Therefore each lookup, insertion or deletion takes time in proporsional to the logarithm (log) of the number of the
total items in the tree. (You can skip half of the tree).
O(log n) instead of O(n) when sorting an array. However it is
slower than the operations than a hashtable O(1).

## Real world examples in Software Engineering?

DOM (Document Object Model)

## Info Graphic

![Info Graphic](https://github.com/savelee/js-datastructures-algorithms/blob/master/study/images/Tree.png "Info Graphic")

## Binary Tree (BST)

Creation of a BST.
<img src="images/tree-example1.png" width="250">

Tree Heights. Min height = 1; Max height = 3. 
Root node is level 0. This tree is not balanced. (see node 63)
<img src="images/bst-height.png" width="250" />
  

## Depth First Search (DFS)

In computer science, tree traversal (also known as tree search) is a form of graph traversal and refers to the process of visiting (checking and/or updating) each node in a tree data structure, exactly once. Such traversals are classified by the order in which the nodes are visited. The following algorithms are described for a binary tree, but they may be generalized to other trees as well.

### Traversal

It is also possible to use depth-first search to linearly order the vertices of a graph or tree. There are three common ways of doing this:

#### In Order (LNR)

In order traversal. Start from left leaf node,
end with right leaf node. With other words from smallest
number to largest number. All numbers will be in order.
In code this means you visit first, the left child node, then you push the visited parent <b>in</b> between, and then go to the right child node.

1. Check if the current node is empty or null.
2. Traverse the left subtree by recursively calling the in-order function.
3. Display the data part of the root (or current node).
4. Traverse the right subtree by recursively calling the in-order function.

Usecases: For sorting a tree.

<img src="images/inorder.png" width="250" />

#### OUT Order (RLN)

1. Check if the current node is empty or null.
2. Traverse the right subtree by recursively calling the out-order function.
3. Display the data part of the root (or current node).
4. Traverse the left subtree by recursively calling the out-order function.

Usecases: For sorting a tree reverse order.

#### Pre Order (NLR)

Pre order. It visits the node prior to its descendants (childs). Start with root nodes, before the leafs.
Follow each branch. 
In code this means you push the visited value to an array,
<b>before</b> visiting the left child node and the right child node.


1. Check if the current node is empty or null.
2. Display the data part of the root (or current node).
3. Traverse the left subtree by recursively calling the pre-order function.
4. Traverse the right subtree by recursively calling the pre-order function.

Usecases: Printing a structured document.
  
<img src="images/preorder.png" width="250" />

#### Post Order (LRN)
  
Post order. It visits the node after visiting its descendants (childs). Start with all the leaf nodes first.
From leaf to leaf, then the parents, then the
next branch. End with root node. In code this means you push the visited value to an array,
<b>after</b> visiting the left child node and the right child node.

1. Check if the current node is empty or null.
2. Traverse the left subtree by recursively calling the post-order function.
3. Traverse the right subtree by recursively calling the post-order function.
4. Display the data part of the root (or current node).

Usecases: Calculating memory from a file in a directory.

<img src="images/postorder.png" width="250" />

# Breadth First Search (BFS)

Trees can also be traversed in level-order, where we visit every node on a level before going to a lower level. This search is referred to as breadth-first search (BFS), as the search tree is broadened as much as possible on each depth before going to the next depth.

### Traversal

#### Level Order

Start from the root node, and continue
traversing for each level. End with the far right leaf node.

<img src="images/levelorder.png" width="250" />
