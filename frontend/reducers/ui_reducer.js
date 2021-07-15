import { combineReducers } from 'redux';
import filtersReducer from './filters_reducer';
import modal from './modal_reducer';

export default combineReducers({
    filters: filtersReducer,
    modal
});
