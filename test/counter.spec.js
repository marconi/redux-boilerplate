import assert from 'assert';
import counter from '../app/reducers/counter';

describe('counter reducer', () => {
  it('should increment', () => {
    assert.equal(counter(0, {type: 'INCREMENT'}), 1);
    assert.equal(counter(1, {type: 'INCREMENT'}), 2);
  });

  it('should decrement', () => {
    assert.equal(counter(2, {type: 'DECREMENT'}), 1);
    assert.equal(counter(1, {type: 'DECREMENT'}), 0);
  });
});

