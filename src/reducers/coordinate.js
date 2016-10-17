const coordinate = (state = '', action) => {
    switch (action.type) {
        case 'UPDATE_COORDINATE':
            return action.newCoordinate;
        default:
            return state;
    }
}

export default score;
