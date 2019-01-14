import { actions as errorMessage } from './errorMessage';
import { actions as entities } from './entities';
import { actions as pagination } from './pagination';

const actions = Object.assign({}, errorMessage, entities, pagination);

export default actions;
