const score = (state = null, action) => {
    switch (action.type) {
        case 'INCREMENT_SCORE':
            return state + 1;
        case 'RESET_SCORE':
            return 0;
        default:
            return state;
    }
}

export default score;
