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

export const updateCoordinate = (coordinates) => {
    let newCoordinate = coordinates[Math.floor(Math.random() * coordinates.length)];
    return {
        type: 'UPDATE_COORDINATE',
        newCoordinate
    };
};

export const resetCoordinate = () => ({
    type: 'RESET_COORDINATE'
});
