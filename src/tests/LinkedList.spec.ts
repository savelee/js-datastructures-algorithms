import { LinkedList } from '../ts/datastructures/LinkedList';

describe('linkedlist.push(): Create a LinkedList with 6 items', () => {

    const ll = new LinkedList();

    it('linkedlist.isEmpty: LinkedList is empty', () => {
        expect(ll.isEmpty()).toBeTruthy;
    });

    ll.push('a');
    ll.push('b');
    ll.push('c');
    ll.push('d');
    ll.push('e');
    ll.push('f');

    it('linkedlist.push("x"): Added succesfully', () => {
        expect(ll.push('x')).toBeTruthy;
    });

    it('linkedlist.indexOf("c"): LinkedList get one', () => {
        expect(ll.indexOf('c')).toBe(2);
    });
});

describe('linkedlist.push(): LinkedList with 6 items and remove 2', () => {

    const ll = new LinkedList();
    ll.push('a');
    ll.push('b');
    ll.push('c');
    ll.push('d');
    ll.push('e');
    ll.push('f');
    ll.removeAt(0);
    ll.remove('c');

    it('linkedlist.removeAt(0): LinkedList remove head', () => {
        expect(ll.indexOf('a')).toBe(-1);
    });

    it('linkedlist.remove("c"): LinkedList remove one in the middle', () => {
        expect(ll.indexOf('c')).toBe(-1);
    });

    it('linkedlist.remove("d"): Remove succesfully', () => {
        expect(ll.remove('d')).toBeTruthy;
    });

    it('linkedlist.isEmpty: LinkedList is not empty', () => {
        expect(ll.isEmpty()).toBeFalsy;
    });
});

describe('linkedlist.insert(2,"???"): LinkedList with 4 items and insert 1 in the middle', () => {

    const ll = new LinkedList();
    ll.push('a');
    ll.push('b');
    ll.push('c');
    ll.push('d');

    it('linkedlist.insert(2, "???"): LinkedList insert one', () => {
        expect(ll.insert(2, '???')).toBeTruthy;
    });

    it('linkedlist.insert(2, "!!!"): LinkedList get one thats inserted', () => {
        ll.insert(3, "!!!");
        expect(ll.indexOf('!!!')).toBe(3);
    });

    it('linkedlist.isEmpty: LinkedList is not empty', () => {
        expect(ll.isEmpty()).toBeFalsy;
    });
});