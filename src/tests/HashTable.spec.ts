import { HashTable } from '../ts/datastructures/HashTable';

describe('hashtable.put() Set hash with key value pairs, great hashing function', () => {
    let ht = new HashTable({
        bucketSize: 0
    });
    ht.put('lee', '+3165153344');
    ht.put('michele', '+316515335');
    ht.put('lee', '+316515335'); // skipped key needs to be unique
    ht.put('ele', '+3165153344');
    ht.put('david', '+3465153346');
    ht.put('jake', '+3465153347');
    ht.remove('ele');

    it('hashtable.size(): Skip the duplicate, and remove one', () => {
        expect(ht.size()).toBe(4);
    });
    it('hashtable.hasCode(): get correct code', () => {
        expect(ht.hashCode('lee')).toEqual(159891);
    });
    it('hashtable.get(): Get one', () => {
        expect(ht.get('lee')).toBe('+3165153344');
    });
});

describe('hashtable.put() Set hash with key value pairs', () => {
    let ht = new HashTable({
        bucketSize: 5,
        uniqueKeys: true
    });
    ht.put('lee', '+3165153344');
    ht.put('michele', '+316515335');
    ht.put('ele', '+3165153344');
    ht.put('david', '+3465153346');
    ht.put('jake', '+3465153347');
    ht.remove('ele');

    it('hashtable.size(): Remove one', () => {
        expect(ht.size()).toBe(4);
    });

    it('hashtable.isEmpty(): Not Empty', () => {
        expect(ht.isEmpty()).toBeFalsy();
    });

    it('hashtable.get(): Get one', () => {
        expect(ht.get('david')).toBe('+3465153346');
    });
});

describe('hashtable.put() Set hash with key value pairs, use probing', () => {
    let ht = new HashTable({
        probe: true,
        bucketSize: 5
    });
    ht.put('lee', '+3165153344');
    ht.put('michele', '+316515335');
    ht.put('lee', '+316515335'); // skipped key needs to be unique
    ht.put('ele', '+3165153344');
    ht.put('david', '+3465153346');
    ht.put('jake', '+3465153347');
    ht.remove('ele');

    it('hashtable.size(): Skip the duplicate, and remove one', () => {
        expect(ht.size()).toBe(5);
    });
    it('hashtable.bucketSize: Bucket Size is higher than Hash total', () => {
        expect(ht.bucketSize).toBe(5);
    });
});