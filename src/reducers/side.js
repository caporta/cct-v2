const side = (state = 'white', action) => {
    switch (action.type) {
        case 'TOGGLE_SIDE':
            return action.side
        default:
            return state;
    }
};

export default side;
