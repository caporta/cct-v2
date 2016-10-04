const side = (state = { color: 'white' }, action) => {
    switch (action.type) {
        case 'TOGGLE_SIDE':
            return Object.assign({}, state, {
                color: action.color
            });
        default:
            return state;
    }
};

export default side;
