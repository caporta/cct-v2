const initialState = {
    side: 'white'
};

const sideSelector = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_SIDE':
            return Object.assign({}, state, {
                side: action.side
            });
        default:
            return state;
    }
};

export default sideSelector;
