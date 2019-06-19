import {Dispatch, Middleware, MiddlewareAPI} from 'redux';
import {Cat} from '../models/Cat';
import {catsDataSet} from './cats.data.reducer';


const CATS_API_GET_CATS = '[CATS API] GET_CATS';

// actions types
interface getCatsAction {
  type: typeof CATS_API_GET_CATS;
}

// actions factories
export const getCats = (): getCatsAction => {
  return {
    type: CATS_API_GET_CATS,
  }
};

// see: https://stackoverflow.com/questions/45339448/how-do-you-create-strongly-typed-redux-middleware-in-typescript-from-reduxs-typ
const getCatsFlow:Middleware = ({dispatch}: MiddlewareAPI) => (next: Dispatch) => action => {
  if (action.type === CATS_API_GET_CATS) {
    // see: https://facebook.github.io/create-react-app/docs/deployment#github-pages-https-pagesgithubcom
    // https://facebook.github.io/create-react-app/docs/using-the-public-folder
    fetch(process.env.PUBLIC_URL + '/data/cats.json')
      .then(res => res.json())
      .then((data: Array<any>) => {
        const cats = data.map(c => new Cat(c));
        dispatch(catsDataSet(cats));
      })
      .catch((e) => {
        console.error('Cats Fetch failed', e)
      })
  }
  return next(action);
};

export const catsMdl = [getCatsFlow];
