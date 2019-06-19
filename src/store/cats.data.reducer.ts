// See: https://redux.js.org/recipes/usage-with-typescript
import {Cat} from '../models/Cat';

const CATS_DATA_SET = '[CATS] DATA_SET';

// actions types
interface CatSetAllAction {
  type: typeof CATS_DATA_SET;
  payload: Array<Cat>;
}

type CatsDataActionTypes = CatSetAllAction

// actions factories
export const catsDataSet = (payload: Array<Cat>): CatsDataActionTypes => {
  return {
    type: CATS_DATA_SET,
    payload
  }
};

const catsDataReducer = (state:Array<Cat> = [], action: CatsDataActionTypes) => {
  switch (action.type) {
    case CATS_DATA_SET:
      state = action.payload;
      break;
  }
  return state;
};

export default catsDataReducer;
