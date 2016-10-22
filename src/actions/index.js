export const toggleSide = (side) => ({
    type: 'TOGGLE_SIDE',
    side
});

export const toggleGame = () => ({
    type: 'TOGGLE_GAME'
});

export const incrementScore = () => ({
    type: 'INCREMENT_SCORE'
});

export const resetScore = () => ({
    type: 'RESET_SCORE'
});

export const updateCoordinate = (newCoordinate) => ({
    type: 'UPDATE_COORDINATE',
    newCoordinate
});

export const resetCoordinate = () => ({
    type: 'RESET_COORDINATE'
});
