import { combineReducers } from 'redux';

import game from './game';
import score from './score';
import side from './side';
import coordinate from './coordinate';


const rootReducer = combineReducers({
    game,
    score,
    side,
    coordinate
});

export default rootReducer;
