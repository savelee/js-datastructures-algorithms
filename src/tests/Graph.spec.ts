import { Graph } from '../ts/datastructures/Graph';

describe('graph.hasDfs()', () => {
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

    it('graph.hasDfs() - Has Path?: A -> B', () => {
        expect(graph.hasPathDfs('A', 'B')).toBeTruthy();
    });

    it('graph.hasDfs() - Has Path?: A -> C', () => {
        expect(graph.hasPathDfs('A', 'C')).toBeTruthy();
    });

    it('graph.hasDfs() - Has Path?: A -> D', () => {
        expect(graph.hasPathDfs('A', 'D')).toBeTruthy();
    });

    it('graph.hasDfs() - Has Path?: D -> F', () => {
        expect(graph.hasPathDfs('D', 'F')).toBeTruthy();
    });

    it('graph.hasDfs() - Has Path?: A -> G', () => {
        expect(graph.hasPathDfs('A', 'G')).toBeTruthy();
    });

    it('graph.hasDfs() - Has Path?: E -> B', () => {
        expect(graph.hasPathDfs('E', 'B')).toBeFalsy();
    });

    it('graph.getDfsPath() - Log Path?: A -> G', () => {
        expect(graph.getDfsPath('A', 'G')).toEqual(["A", "D", "F", "B", "G"]);
    });
});

describe('graph.hasBfs()', () => {
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

    it('graph.hasBfs() - Has Path?: A -> B', () => {
        expect(graph.hasPathBfs('A', 'B')).toBeTruthy();
    });

    it('graph.hasBfs() - Has Path?: A -> C', () => {
        expect(graph.hasPathBfs('A', 'C')).toBeTruthy();
    });

    it('graph.hasBfs() - Has Path?: A -> D', () => {
        expect(graph.hasPathBfs('A', 'D')).toBeTruthy();
    });

    it('graph.hasBfs() - Has Path?: D -> F', () => {
        expect(graph.hasPathBfs('D', 'F')).toBeTruthy();
    });

    it('graph.hasBfs() - Has Path?: A -> G', () => {
        expect(graph.hasPathBfs('A', 'G')).toBeTruthy();
    });

    it('graph.hasBfs() - Has Path?: E -> B', () => {
        expect(graph.hasPathBfs('E', 'B')).toBeFalsy();
    });

    it('graph.getDfsPath() - Log Path?: A -> G', () => {
        expect(graph.getBfsPath('A', 'G')).toEqual(["A", "B", "C", "D", "G"]);
    });
});
