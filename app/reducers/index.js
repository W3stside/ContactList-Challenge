import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
// SLICE REDUCERS
import contacts from './contactsReducer'

/**
 * Redux root Reducer - exports imported Reducers with each KEY as a REDUCER
 * IMPORTANT: import each separate Reducer with the same NAME as the slice of STATE it handles
 * @type {object}
*/
const rootReducer = combineReducers({
    contacts,
    routing
});

export default rootReducer;
