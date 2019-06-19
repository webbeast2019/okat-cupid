import {applyMiddleware, combineReducers, createStore} from 'redux'
import catsDataReducer from './cats.data.reducer';
import {Cat} from '../models/Cat';
import {composeWithDevTools} from 'redux-devtools-extension';

export interface IRootState {
  cats: Array<Cat>
}

export default function configureStore() {
  const middlewareEnhancer = applyMiddleware(/*middleware will be added here*/);
  const composedEnhancers = composeWithDevTools(middlewareEnhancer);
  
  const rootReducer = combineReducers({
    cats: catsDataReducer
  });
  
  return createStore(rootReducer, {}, composedEnhancers);
}