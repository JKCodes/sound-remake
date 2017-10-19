import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

var store;
export default {
  configureStore: (initialState) => {
    var reducers = combineReducers({

    })

    store = createStore(
      reducers,
      initialState,
      applyMiddleware(thunk)
    )

    return store;
  }
}