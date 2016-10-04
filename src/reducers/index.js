import { combineReducers } from 'redux';

import game from './game';
import score from './score';
import side from './side';


const rootReducer = combineReducers({
    game,
    score,
    side
});

export default rootReducer;
