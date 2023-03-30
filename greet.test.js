var utils  = require('course-utilities');
var greet = utils.load('./greet.js', 'greet');

describe('Greet', () => {

    test('Null value', () => {
        expect(greet(null)).toBe('Hello there');
    });
    test('Single name', () => {
        expect(greet("Elizabeth")).toBe('Hello Elizabeth');
    });
    test('Shouting name', () => {
        expect(greet('JOSE')).toBe('HELLO JOSE');
    });
    test('Two names', () => {
        expect(greet(['Jose','Pep'])).toBe('Hello Jose, Pep');
    });
    test('Many names', () => {
        expect(greet(['Alex', 'Arsene', 'Jose', 'Zidane'])).toBe('Hello Alex, Arsene, Jose, Zidane');
    });
});