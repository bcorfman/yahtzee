class Counter
{
    map: Map<number, number>;

    constructor(items: Array<number>) {
        this.map = new Map<number, number>();
        for (let item of items) {
            if (this.map.has(item)) {
                this.map.set(item, (this.map.get(item) || 0) + 1);
            }
            else { 
                this.map.set(item, 1);
            }
        }
    } 
}

const range = (start: number, end: number) => Array.from({length: (end - start)}, (v, k) => k + start);

function _top(num: number, lst: Array<number>) : Array<number> {
    let result = Array<number>(num);
    if (lst.length >= num) {
        result = lst.slice(0, num);
    }
    else {
        result.fill(0, num);
    }
    return result;
}

function _highest_matching_groups(num_matching: number, dice: Array<number>) : Array<number> {
    let score_matching = Array<number>();
    let counter = new Counter(dice);
    for (let [k, v] of counter.map) {
        if (v == num_matching) {
            score_matching.push(k * num_matching);
        }
    }
    return score_matching.sort().reverse()
}

function _straight(starting_number: number, dice: Array<number>) : number {
    let sorted_dice = dice.sort();
    let straight = range(starting_number, starting_number+5);
    let sum = 0;
    if (sorted_dice.every(item => straight.includes(item)) && straight.every(item => sorted_dice.includes(item))) {
        sum = dice.reduce((sum, die) => sum + die, 0);
    }
    return sum;
}

export function same_number(num: number, dice: Array<number>): number {
    let sum = 0;
    if (dice.includes(num)) {
        for (let die of dice) {
            if (die == num)
                sum += die;
        }
    }
    return sum;
}


export function pair(dice: Array<number>): number {
    return _top(1, _highest_matching_groups(2, dice)).reduce((sum, die) => sum + die, 0);
}


export function two_pair(dice: Array<number>): number {
    return _top(2, _highest_matching_groups(2, dice)).reduce((sum, die) => sum + die, 0);
}

export function three_of_a_kind(dice: Array<number>): number {
    return _top(1, _highest_matching_groups(3, dice)).reduce((sum, die) => sum + die, 0);
}

export function four_of_a_kind(dice: Array<number>): number {
    return _top(1, _highest_matching_groups(4, dice)).reduce((sum, die) => sum + die, 0);
}

export function small_straight(dice: Array<number>): number {
    return _straight(1, dice);
}

export function large_straight(dice: Array<number>): number {
    return _straight(2, dice);
}

export function full_house(dice: Array<number>): number {
    return _top(1, _highest_matching_groups(3, dice)).reduce((sum, die) => sum + die, 0) + 
           _top(1, _highest_matching_groups(2, dice)).reduce((sum, die) => sum + die, 0);
}

export function yahtzee(dice: Array<number>): number {
    let result = 0;
    if (_top(1, _highest_matching_groups(5, dice)).reduce((sum, die) => sum + die, 0))
        result = 50;
    return result;
}

export function chance(dice: Array<number>): number {
    return dice.reduce((sum, die) => sum + die, 0);
}