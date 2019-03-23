"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Map_1 = require("../ts/datastructures/Map");
describe('map.set() Set key value pairs', () => {
    let map = new Map_1.Map();
    map.set('a01', 'lee');
    map.set('b02', 'michele');
    map.set('a03', 'jake');
    it('map.set(): Set a new item to the map', () => {
        expect(map.set('b04', 'david')).toBeTruthy();
    });
    it('map.hasKey(): Has a particular key', () => {
        expect(map.hasKey('a05')).toBeFalsy();
    });
    it('map.get(): Get a value from a key', () => {
        expect(map.get('a01')).toBe('lee');
    });
});
describe('map.remove() Removing key value pairs', () => {
    let map = new Map_1.Map();
    map.set('a01', 'lee');
    map.set('b02', 'michele');
    map.set('a03', 'jake');
    it('map.size(): Size', () => {
        map.remove('b02');
        expect(map.size()).toBe(2);
    });
});
describe('map.clear() Clearing the Map', () => {
    let map = new Map_1.Map();
    map.set('a01', 'lee');
    map.set('b02', 'michele');
    map.set('a03', 'jake');
    it('map.clear(): Clear all', () => {
        map.clear();
        expect(map.isEmpty()).toBeTruthy();
    });
});
//# sourceMappingURL=HashMap.spec.js.map