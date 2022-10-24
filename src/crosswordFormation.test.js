const solution = require('./crosswordFormation.js');

test('test 1', () => {
    expect(solution(['crossword', 'square', 'formation', 'something'])).toBe(6);
});

test('test 2', () => {
    expect(solution(['anaesthetist', 'thatch', 'ethnics', 'sabulous'])).toBe(0);
});

test('test 3', () => {
    expect(solution(['eternal', 'texas', 'chainsaw', 'massacre'])).toBe(4);
});

test('test 4', () => {
    expect(solution(['africa', 'america', 'australia', 'antarctica'])).toBe(62);
});

test('test 5', () => {
    expect(solution(['phenomenon', 'remuneration', 'particularly', 'pronunciation'])).toBe(62);
});

test('test 6', () => {
    expect(solution(['onomatopoeia', 'philosophical', 'provocatively', 'thesaurus'])).toBe(20);
});
