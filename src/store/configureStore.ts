import {combineReducers, createStore} from 'redux'
import catsDataReducer from './cats.data.reducer';
import {Cat} from '../models/Cat';

export interface IRootState {
  cats: Array<Cat>
}

export default function configureStore() {
  const rootReducer = combineReducers({
    cats: catsDataReducer
  });
  
  return createStore(rootReducer, {});
}