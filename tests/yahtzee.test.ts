import { same_number, pair, two_pair, three_of_a_kind, four_of_a_kind, small_straight,
         large_straight, full_house, yahtzee, chance } from "../src/yahtzee";

test('same_number', () => {
    expect(same_number(4, [1, 1, 2, 4, 4])).toStrictEqual(8);
});

test('pair', () => {
    expect(pair([3, 3, 3, 4, 4])).toStrictEqual(8);
});

test('two pair', () => {
    expect(two_pair([1, 1, 2, 3, 3])).toStrictEqual(8);
    expect(two_pair([1, 2, 3, 4, 5])).toStrictEqual(0);
});

test('three of a kind', () => {
    expect(three_of_a_kind([3, 3, 3, 4, 5])).toStrictEqual(9);
    expect(three_of_a_kind([3, 3, 3, 3, 5])).toStrictEqual(0);
    expect(three_of_a_kind([3, 3, 2, 4, 5])).toStrictEqual(0);
});

test('four of a kind', () => {
    expect(four_of_a_kind([2, 2, 2, 2, 5])).toStrictEqual(8);
    expect(four_of_a_kind([2, 2, 2, 2, 2])).toStrictEqual(0);
    expect(four_of_a_kind([3, 3, 3, 4, 5])).toStrictEqual(0);
});

test('small straight', () => {
    expect(small_straight([1, 2, 3, 4, 5])).toStrictEqual(15);
    expect(small_straight([2, 3, 4, 5, 6])).toStrictEqual(0);
});

test('large straight', () => {
    expect(large_straight([1, 2, 3, 4, 5])).toStrictEqual(0);
    expect(large_straight([2, 3, 4, 5, 6])).toStrictEqual(20);
});

test('full house', () => {
    expect(full_house([1, 1, 2, 2, 2])).toStrictEqual(8);
    expect(full_house([4, 4, 4, 4, 4])).toStrictEqual(0);
});

test('yahtzee', () => {
    expect(yahtzee([1, 1, 1, 1, 1])).toStrictEqual(50);
    expect(yahtzee([1, 2, 1, 1, 1])).toStrictEqual(0);
});

test('chance', () => {
    expect(chance([1, 3, 3, 4, 6])).toStrictEqual(17);
    expect(chance([1, 1, 1, 1, 1])).toStrictEqual(5);
});
