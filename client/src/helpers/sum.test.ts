import { sum } from "./sum";

describe('sum testing', (): void => {

    test('sum is declarated', () => {
        expect(sum).toBeDefined();
    })

    test('to return sum of 2 numbers', () => {
        expect(sum(1,2)).toBe(3);
    })
})