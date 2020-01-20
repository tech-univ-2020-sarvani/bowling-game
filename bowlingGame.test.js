const bowlingGameScore = require('./bowlingGame');
const roll = require('./bowlingGame');
const score = require('./bowlingGame');

describe('The function bowlingGameScore', () => {
    it('should returns the totalScore calculated by the function score', () => {
        const scores = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
        const result = bowlingGameScore(scores);
        expect(result).toEqual(90);
    });
    it('should return 10 plus the number of pins knocked down in their next throw for a spare', () => {
        const scores = [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const result = bowlingGameScore(scores);
        expect(result).toEqual(16);
    });
    it('should return 10 plus the number of pins knocked down in the next two throws for a strike', () => {
        const scores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];;
        const result = bowlingGameScore(scores);
        expect(result).toEqual(30);
    });
});
// describe('The function roll', () => {
//     it('should call function strike, if the no.of throws is odd and no.of pins knocked down is 10', () => {
//         strike = jest.fn();
//         roll(10);
//         expect(strike).toHaveBeenCalled();
//     });
//     it('should call function spare, if the no.of throws is even and no.of pins knocked down in the frame is summed to 10', () => {
//         spare = jest.fn();
//         roll(5);
//         roll(5);
//         expect(spare).toHaveBeenCalled();
//     });
//     it('should call function addScore, if the no.of throws is even and no.of pins knocked down in the frame is not summed to 10', () => {
//         addScore = jest.fn();
//         roll(6);
//         roll(3);
//         expect(addScore).toHaveBeenCalled();
//     });
// });

describe('The function score', () => {
    it('should return a number', () => {
        const result = score(10);
        expect(typeof result).toBe('number');
    });
});
