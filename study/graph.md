# What do we know about Graphs?

A Graph is an abstract model of a network structure.
It contains a set of nodes, which are called **vertices**.
The vertices are connected by **edges**.

A Graph in Maths:
G = ( V , E )

Graphs have some similarities with Trees. They can also make use of the Breadth First Search (BFS) and Depth First (DFS) algorithms. 

## Adjacent Vertices

Vertices connected by an edge are called adjacent vertices.

To display adjacency, we can use 2 Dimensional Arrays. (Matrixes)
For example, to showcase which vertices are connected:

Node A B C D E
A 0 1 0 0 1
B 0 1 1 1 0
C 1 0 0 0 0
D 0 0 1 0 0
E 0 0 0 1 0 

You can also use the matrix notation when each row in
the matrix is a vertex, and each column an edge.
This is called an **incidence matrix**.

It'a also possiblr to display an adjacency via a list.
You can use an Array, LinkedList or Dictionary for this:

A: B E
B: B C D
C: A 
D: C
E: D

## Degree

A degree of a vertex consist of a number of adjacent vertices.

## Path

A path is a sequence of consecutive vertices, where VI and VI+1 are adjacent.

## Cycles & Acyclic

A simple path that does not contain repeated certicles is called a cycle.
A graph is acyclic if it does not have cycles.

## Directed & Undirected

Graphs are undirected (where edges do not have a direction), or directed (digraphs).
Basically edges with arrows. An edge could also be strongly connected, which means the path allows both directions (double arrows).

## Weighted & UnWeighted

When graphs have a weight number at their edges.

## Real world examples in Software Engineering?

A Graph to display a roads, flights, communications.

