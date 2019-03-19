import { Queue } from '../ts/datastructures/Queue';

describe('queue.add()/queue.values(): Create a Queue with 4 items', () => {

  const line = new Queue();
  const testArray = ['Lee', 'Michele', 'David', 'Jake'];
  line.add('Lee');
  line.add('Michele');
  line.add('David');
  line.add('Jake');

  it('queue.values(): Queue values are correct', () => {
    expect(line.values()).toEqual(testArray);
  });
  it('queue.size(): Queue size is 4', () => {
    expect(line.size()).toEqual(4);
  });
  it('queue.isEmpty(): Queue is not empty', () => {
    expect(line.isEmpty()).toBeFalsy();
  });
  it('queue.peek(): First person in line is Lee', () => {
    expect(line.peek()).toEqual(testArray[0]);
  });
});


describe('queue.remove(): Remove the first item in queue', () => {

    const line = new Queue();
    line.add('Lee');
    line.add('Michele');
    line.add('David');
    line.add('Jake');
    line.remove();

    it('queue.size(): Queue size is 3', () => {
        expect(line.size()).toEqual(3);
    });
    it('queue.isEmpty(): Queue is not empty', () => {
        expect(line.isEmpty()).toBeFalsy();
    });
    it('queue.peek(): First person in line is Michele', () => {
        expect(line.peek()).toEqual('Michele');
    });
});

describe('queue.clear(): Clear the Queue', () => {

    const line = new Queue();
    line.add('Lee');
    line.add('Michele');
    line.add('David');
    line.add('Jake');
    line.clear();

    it('queue.size(): Queue size is 0', () => {
        expect(line.size()).toEqual(0);
    });
    it('queue.isEmpty(): Queue is empty', () => {
        expect(line.isEmpty()).toBeTruthy();
    });
});