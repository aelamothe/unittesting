var utils  = require('course-utilities');
var greet = utils.load('./greet.js', 'greet');

describe('Greet', () => {

    test('Single name', () => {
        expect(greet("Elizabeth")).toBe('Hello Elizabeth');
    });
});