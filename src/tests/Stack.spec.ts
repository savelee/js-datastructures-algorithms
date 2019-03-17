import { Stack } from '../ts/datastructures/Stack';

describe('stack.push()/stack.values(): Create a Stack with 4 items', () => {

  const deck = new Stack();
  const testArray = ['Timber Wolf', 'Dire Mole', 'Fire Fly', 'The Lich King'];
  deck.push('Timber Wolf');
  deck.push('Dire Mole');
  deck.push('Fire Fly');
  deck.push('The Lich King');

  it('stack.values(): Stack values are correct', () => {
    expect(deck.values()).toEqual(testArray);
  });
  it('stack.size(): Stack size is 4', () => {
    expect(deck.size() === 4).toBeTruthy();
  });
  it('stack.isEmpty(): Stack is not empty', () => {
    expect(deck.isEmpty()).toBeFalsy();
  });
  it('stack.peek(): Top item is The Lich King', () => {
    expect(deck.peek()).toEqual(testArray[3]);
  });
});


describe('deck.pop(): Remove top item', () => {

  const deck = new Stack();
  const testArray = ['Timber Wolf', 'Dire Mole', 'Fire Fly', 'The Lich King'];
  deck.push('Timber Wolf');
  deck.push('Dire Mole');
  deck.push('Fire Fly');
  deck.push('The Lich King');
  deck.pop();

  it('stack.size(): Stack size is 3', () => {
    expect(deck.size() === 3).toBeTruthy();
  });
  it('stack.isEmpty(): Stack is not empty:', () => {
    expect(deck.isEmpty()).toBeFalsy();
  });
  it('stack.peek(): Top item is Fire Fly', () => {
    expect(deck.peek()).toEqual(testArray[2]);
  });
});

describe('stack.clear(): Clear the Stack', () => {

  const deck = new Stack();
  deck.push('Timber Wolf');
  deck.push('Dire Mole');
  deck.push('Fire Fly');
  deck.push('The Lich King');
  deck.clear();

  it('stack.size(): Stack size is 0', () => {
    expect(deck.size() === 0).toBeTruthy();
  });
  it('stack.isEmpty(): Stack is empty:', () => {
    expect(deck.isEmpty()).toBeTruthy();
  });
});