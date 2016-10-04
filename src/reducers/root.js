import { combineReducers } from 'redux';

import score from './score';
import side from './side';


const rootReducer = combineReducers({
    score,
    side
});

export default rootReducer;
