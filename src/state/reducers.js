import { combineReducers } from 'redux'
import { reducers as errorMessage } from './errorMessage'
import { reducers as entities } from './entities'
import { reducers as pagination } from './pagination'

const reducers = combineReducers({
    errorMessage,
    entities,
    pagination
});

export default reducers;
