import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  var reducers = combineReducers({

  })

  var store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
  )

  return store;
}