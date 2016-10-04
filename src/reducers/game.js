const game = (state = { active: false }, action) => {
    switch (action.type) {
        case 'TOGGLE_GAME':
            return Object.assign({}, state, {
                active: !state.active
            });
        default:
            return state;
    }
};

export default game;
