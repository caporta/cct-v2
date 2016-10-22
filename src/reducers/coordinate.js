const coordinate = (state = '', action) => {
    switch (action.type) {
        case 'UPDATE_COORDINATE':
            return action.newCoordinate;
        case 'RESET_COORDINATE':
            return '';
        default:
            return state;
    }
}

export default coordinate;
