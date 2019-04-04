/**
 * Each node object  / Vertex
 * @class GraphNode
 * @author Lee Boonstra
 * @param {string} id - string with the node id
 */
export declare class GraphNode {
    id: string;
    adjacents: Array<string>;
    constructor(id: string);
}
/**
 * Create a Graph
 * @class Graph
 * @author Lee Boonstra
 * @param {array} nodeIds - An array with all the string ids to be created
 * @param {array} matrix - A 2 dimensional array (matrix), used as an adjacency list
 */
export declare class Graph {
    private vertices;
    private nodeIds;
    matrix: any[];
    constructor(nodeIds: Array<string>, matrix: any);
    /**
     * Get the Node that belongs to a particular node id.
     * @param {number} nodeId - Node id to look for
     * @returns {Node} node - The matching node
     */
    getNode(nodeId: string): GraphNode;
    addNode(): void;
    addEdge(): void;
    /**
      * Log Breadth First Path from one node to another
      * Go wide, and first check all neighbor nodes. (adjacents) before going deep.
      * @param {string} startId - The Node Id to start searching from
      * @param {string} destinationId - The Node Id that needs to be found
      * @returns {array} history - return a DFS array
      */
    getBfsPath(startId: string, destinationId: string): Array<string>;
    /**
     * Log Depth First Path from one node to another
     * Go deep into nodes, before exploring other nodes.
     * @param {string} startId - The Node Id to start searching from
     * @param {string} destinationId = The Node Id that needs to be found
     * @returns {array} history - return a DFS array
     */
    getDfsPath(startId: string, destinationId: string): Array<string>;
    /**
     * Check if Path exist via Depth First Search
     * Go deep into nodes, before exploring other nodes.
     * Using a Stack
     * @param {string} startId - The Node Id to start searching from
     * @param {string} destinationId - The Node Id that needs to be found
     * @returns {boolean} pathExists - return true if a path was found
     */
    hasPathDfs(startId: string, destinationId: string): boolean;
    /**
     * Check if Path exist via Breath First Search
     * Go wide, and first check all neighbor nodes. (adjacents) before going deep.
     * Using a Queue
     * @param {string} startId - The Node Id to start searching from
     * @param {string} destinationId - The Node Id that needs to be found
     * @returns {boolean} pathExists - return true if a path was found
     */
    hasPathBfs(startId: string, destinationId: string): boolean;
    /**
      * Check if Path exist via Depth First Search
      * Go deep into nodes, before exploring other nodes.
      * Using Stacks
      * @param {GraphNode} source - The Node to start searching from
      * @param {GraphNode} destination - The Node that needs to be found
      * @param {SimpleDict} visited - A Simple Dictionary holding the references to the visisted vertices
      * @returns {boolean} pathExists - return true if a path was found
      */
    private _dfs;
    /**
     * Check if Path exist via Breath First Search
     * Go wide, and first check all neighbor nodes. (adjacents) before going deep.
     * Need a Queue for this
     * @param {GraphNode} source - The Node to start searching from
     * @param {GraphNode} destination - The Node that needs to be found
     * @param {SimpleDict} visited - A Simple Dictionary holding the references to the visisted vertices
     * @returns {boolean} pathExists - return true if a path was found
     */
    private _bfs;
}
