import { Graph } from '../ts/datastructures/Graph';

describe('graph.addEdge() / graph.addVertice() Add vertices and edges', () => {
    const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    let matrix = [
        [0, 1, 1, 1, 0, 0, 0],
        [1, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0]
      ];
    let graph = new Graph(myVertices, matrix);

    it('Depth First Search - Has Path?: A -> B', () => {
        expect(graph.hasPathDfs('A', 'B')).toBeTruthy();
    });

    it('Depth First Search - Has Path?: A -> G', () => {
        expect(graph.hasPathDfs('A', 'G')).toBeTruthy();
    });

    it('Depth First Search - Has Path?: E -> B', () => {
        expect(graph.hasPathDfs('E', 'B')).toBeFalsy();
    });
});
