import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const initState = {
  ingredients: [],
  recipes: [],
};

// eslint-disable-next-line default-param-last
function routReducer(state = initState, action) {
  switch (action.type) {
    case 'ADDITEM':
      return {
        ...state,
        ingredients: [...state.ingredients, action.ingredient],
      };
    case 'ADDRECIPE':
      return {
        ...state,
        recipes: [...state.recipes, action.recipes],
      };
    case 'DELETEALL':
      return {
        ...state,
        ingredients: [],
        recipes: [],
      };
    default:
      return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
export const store = createStore(
  routReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
