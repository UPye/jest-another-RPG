const { TestScheduler } = require('jest');
const Potion = require('../lib/Potion.js');

test('creates a random potion object', () => {
    const potion = new Potion();

    expect(potion.name).toEqual('health');
    expect(potion.value).toEqual(expect.any(Number));
});