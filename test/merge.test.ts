import { merge } from '../src/merge';

describe('merge', () => {
    it('should merge three sorted collections', () => {
        const collection1 = [1, 3, 5];
        const collection2 = [2, 4, 6];
        const collection3 = [6, 4, 2];
        const expected = [1, 2, 2, 3, 4, 4, 5, 6, 6];

        expect(merge(collection1, collection2, collection3)).toEqual(expected);
    });
});