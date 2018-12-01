import {GENERATE_AURAL_UPDATE, generateAuralUpdate, RESTART_GAME, restartGame, MAKE_GUESS, makeGuess} from './actions';

describe('generateAuralUpdate', () => {
    it('Should return the action', () => {
        const action = generateAuralUpdate();
        expect(action.type).to.equal(GENERATE_AURAL_UPDATE);
    });
});

describe('restartGame', () => {
    it('Should return the action', () => {
        const correctAnswer = 21;
        const action = restartGame(correctAnswer);
        expect(action.type).to.equal(RESTART_GAME);
        expect(action.correctAnswer).to.equal(correctAnswer);
    });
});

describe('makeGuess', () => {
    it('Should return the action', () => {
        const guess = 19;
        const action = makeGuess(guess);
        expect(action.type).to.equal(MAKE_GUESS);
        expect(action.guess).to.equal(guess)
    });
});