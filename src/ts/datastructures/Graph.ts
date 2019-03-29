import { SimpleDict } from './Map';
import { Queue } from './Queue';

/**
 * Graph DataStructure
 * @class Graph
 * @author Lee Boonstra
 *
 * # What do we know about Graphs?
 * A Graph is an abstract model of a network structure.
 * It contains a set of nodes, which are called **vertices**.
 * The vertices are connected by **edges**.
 * Graphs have some similarities with Trees.
 * They can also make use of the Breadth First Search (BFS)
 * and Depth First (DFS) algorithms.
 *
 * ## Real world examples in Software Engineering?
 * A Graph to display a roads, flights, communications.
 */
export class Graph {
    public isDirected: Boolean;
    private vertices: any[];
    private adjList: SimpleDict;

    constructor(isDirected = false) {
        this.isDirected = isDirected;
        this.vertices = [];
        this.adjList = new SimpleDict();
    }

    /**
     * Add a vertice to the vertices array
     * @param {string} v - Vertice
     */
    addVertex(v: string): void {
        if (!this.vertices.includes('v')) {
            this.vertices.push(v);
            let adjacents = new Array();
            this.adjList.set(v, adjacents);
        }
    }

    /**
     * Create an edge between two vertices.
     * @param {string} v - Vertical 1
     * @param {string} w Vertical 2
     */
    addEdge(v: string, w: string): void {
        if (!this.adjList.get(v)) {
            // the vertex doesn't exist
            // so please create
            this.addVertex(v);
        }
        if (!this.adjList.get(w)) {
            // the other vertice doesn't exist
            // so please create
            this.addVertex(w);
        }

        this.adjList.get(v).push(w);
        if (!this.isDirected) {
            this.adjList.get(w).push(v);
        }
    }

    /**
     * Return the array with Vertices
     * @returns {Array} vertices (nodes array)
     */
    getVertices(): any[] {
        return this.vertices;
    }

    /**
     * Return the Dictionairy with adjacents.
     * @returns {SimpleDict} - Adjacents (vertices with edges)
     */
    getAdjacents(): SimpleDict {
        return this.adjList;
    }

    /**
     * Traverse the graph
     * @param {string} vertex - Vertex to start traversing from
     * @param {object} opt
     * @param {string} opt.method - bfs | dfs default (bfs)
     */
    traverse(graph: Graph, vertex: string, opt: any): any[] {
        let method = "";
        let array = new Array();
        if (opt.method) {
            method = opt.method.toLowerCase();
        }
        switch (method) {
            case 'bfs':
                array = this._bfs(graph, vertex);
                break;
            case 'dfs':
                array = this._bfs(graph, vertex);
                break;
            default:
                array = this._bfs(graph, vertex);
        }

        return array;
    }

    /**
     * Breadth First Search
     * This should travarse the graph first widely and then deeply.
     * It first visits the direct neigbors and afterwards it will go
     * a level deeper. The point of this, is so you can calculate the difference
     * between nodes.
     * @param {Graph} graph - current Graph
     * @param {string} startVertex - vertex to start from
     * @param {Function} cb - Callback function (optional)
     */
    _bfs(graph: Graph, startVertex: string): any[] {
        const allAdjacents = graph.getAdjacents();
        const queue = new Queue();
        let visited = {};
        let results = new Array();

        console.log('startVertex ' + startVertex);
        // put the start vertex in the queue
        queue.add(startVertex);

        // as long as there are vertices in the queue
        // keep looping
        while (!queue.isEmpty()) {
            // remove the first in the queue
            const vertex = queue.remove();
            // mark as visited
            visited[vertex] = 'visited';
            // these are the adjacents of the dequeued vertex
            const adjacents = allAdjacents.get(vertex);
     
            // if the vertex has adjacents
            if (vertex) {
                results.push(vertex);

                for (let i = 0; i <= adjacents.length; i++) {
                    const connectedVertex = adjacents[i];
                    // if it hasn't been visited add it to the queue
                    if (!visited[connectedVertex]) {
                        queue.add(connectedVertex);
                    }
                }
            }
        }

        return results;
    }

    dfs(): any[] {
        let arr;

        return arr;
    }

    _printVertex(value: string): void {
        console.log(`Visited vertex: ${value}`)
    }

    /**
     * Helper, to String
     * @returns {string} s - everything to string
     */
    toString(): string {
        let s = '';
        for (let i = 0; i < this.vertices.length; i++) {
            s += `${this.vertices[i]}: `;
            const adjacents = this.adjList.get(this.vertices[i]);
            for (let j = 0; j < adjacents.length; j++) {
                s += `  ${adjacents[j]}`
            };
            s += `\n`;
        }

        return s;
    }
}
