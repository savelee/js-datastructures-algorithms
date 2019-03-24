import { HashTable } from '../ts/datastructures/HashTable';

describe('ht.put() Set hash with key value pairs', () => {
    let ht = new HashTable({});
    ht.put('lee', '+3165153344');
    ht.put('michele', '+316515335');
    ht.put('lee', '+316515335'); // skipped key needs to be unique
    ht.put('ele', '+3165153344');
    ht.put('david', '+3465153346');
    ht.put('jake', '+3465153347');

    it('ht.size(): Skip the duplicate', () => {
        expect(ht.size()).toBe(5);
    });
    // it('ht.hashCode(): Get a hash', () => {
    //     expect(ht.hashCode('a01')).toEqual(141941);
    // });
    // it('ht.get(): Find a key value pair based on hash', () => {
    //    expect(ht.get('sander')).toEqual(keyVal);
    // });
});
