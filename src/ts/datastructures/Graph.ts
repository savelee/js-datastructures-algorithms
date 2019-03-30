import { Queue } from '../datastructures/Queue';
import { SimpleDict } from '../datastructures/SimpleDict';

/**
 * Each node object  / Vertex
 * @class GraphNode
 * @author Lee Boonstra
 * @param {string} id - string with the node id
 */
export class GraphNode {
    public id: string;
    public adjacents: Array<string>;

    constructor(id: string) {
        this.id = id;
        this.adjacents = new Array();
    }
}

/**
 * Create a Graph
 * @class Graph
 * @author Lee Boonstra
 * @param {array} nodeIds - An array with all the string ids to be created
 * @param {array} matrix - A 2 dimensional array (matrix), used as an adjacency list
 */
export class Graph {
    private vertices: Object;
    private nodeIds: any[];
    public matrix: any[];

    constructor (nodeIds: Array<string>, matrix: any) {
        this.matrix = matrix;
        this.nodeIds = nodeIds;
        this.vertices = {};

        // the matrix should have for each row a vertex
        if (nodeIds.length !== this.matrix.length) {
            throw "The size of the matrix doesn't contain the total of vertices";
        }

        // loop through the array rows
        for (let i = 0; i < matrix.length; i++) {
            // create a vertex node, for each row in the matrix
            let node = new GraphNode(this.nodeIds[i]);

            // loop through all the adjacents
            for (let j = 0; j < this.matrix[i].length; j++) {
                // Add the adjacent, when it's marked
                // as one in the matrix.
                if (matrix[i][j] === 1) {
                    node.adjacents.push(this.nodeIds[j]);
                }
            }

            // each vertex gets a row in the vertices array
            this.vertices[node.id] = node;
        }

        console.log(this.vertices);
    }



    /**
     * Get the Node that belongs to a particular node id.
     * @param {number} nodeId - Node id to look for
     * @returns {Node} node - The matching node
     */
    getNode(nodeId: string): GraphNode {
        return this.vertices[nodeId];
    }

    addNode() {




    }

    addEdge() {

    }

    /**
     * Check if Path exist via Depth First Search
     * Go deep into nodes, before exploring other nodes.
     * Recursive Function
     * @param {string} startId - The Node Id to start searching from
     * @param {string} destinationId = The Node Id that needs to be found
     * @returns {boolean} pathExists = return true if a path was found
     */
    public hasPathDfs(startId: string, destinationId: string): boolean {
        let pathExists = false;
        let source = this.getNode(startId);
        let destination = this.getNode(destinationId);
        let visited = new SimpleDict();

        pathExists = this._hasPathDfs(source, destination, visited);

        return pathExists;
    }


    /**
     * Check if Path exist via Depth First Search
     * Go deep into nodes, before exploring other nodes.
     * Recursive Function
     * @param {GraphNode} source - The Node to start searching from
     * @param {GraphNode} destination - The Node that needs to be found
     * @param {SimpleDict} visited - A Simple Dictionary holding the references to the visisted vertices
     * @returns {boolean} pathExists - return true if a path was found
     */
    private _hasPathDfs(source: GraphNode, destination: GraphNode, visited: SimpleDict): boolean {
        if (visited.hasKey(source.id)) {
            // you have visited the node before
            // this is also the part thats would
            // stop the recursive function
            return false;
        }

        visited.set(source.id, true);

        // the node you are looking for
        // is the same as the destination
        if (source.id === destination.id) {
            return true;
        }

        // now look into its adjacents
        for (let id of source.adjacents) {
            let node = this.getNode(id);
            // recursive, keep looking in its neighbors
            if (this._hasPathDfs(node, destination, visited)) return true;
        }

        return false;
    }

    /**
     * Check if Path exist via Breath First Search
     * Go wide, and first check all neighbor nodes. (adjacents) before going deep.
     * Need a Queue for this
     * @param {string} startId - The Node Id to start searching from
     * @param {string} destinationId = The Node Id that needs to be found
     * @returns {boolean} pathExists = return true if a path was found
     */
    public hasPathBfs(startId: string, destinationId: string): boolean {
        let pathExists = false;
        let source = this.getNode(startId);
        let destination = this.getNode(destinationId);
        let visited = new SimpleDict();

        pathExists = this._hasPathBfs(source, destination, visited);

        return pathExists;
    }


    /**
     * Check if Path exist via Breath First Search
     * Go wide, and first check all neighbor nodes. (adjacents) before going deep.
     * Need a Queue for this
     * @param {GraphNode} source - The Node to start searching from
     * @param {GraphNode} destination - The Node that needs to be found
     * @param {SimpleDict} visited - A Simple Dictionary holding the references to the visisted vertices
     * @returns {boolean} pathExists - return true if a path was found
     */
    private _hasPathBfs(source: GraphNode, destination: GraphNode, visited: SimpleDict): boolean {
        let queue = new Queue();
        queue.add(source);

        while (!queue.isEmpty()) {
            // as long as there are items in the queue
            // keep running this

            // get the item from the queue
            let node = queue.remove();

            // the node you are looking for
            // is the same as the destination
            if (node === destination) {
                return true;
            }

            if (visited.hasKey(node.id)) {
                // you have visited the node before
                // the continue statement "jumps over" one iteration in the loop.
                continue;
            }

            visited.set(node.id, true);

            // now look into its adjacents
            for (let id of node.adjacents) {
                let neighbor = this.getNode(id);
                queue.add(neighbor);
            }
        }

        return false;
    }
}
