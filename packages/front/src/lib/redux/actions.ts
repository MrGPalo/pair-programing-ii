import {
  addIngredient, addRecipe, deleteIngredient, deleteRecipe, getIngredients, getRecipe,
} from '../api';

// Redux action generator
// ACTION: Add item to local store
export const addItem = (ingredient) => {
  console.log('Adding item');
  return {
    type: 'ADDITEM',
    ingredient,
  };
};

export const addRecipeItem = (recipe) => {
  console.log('Adding recipe item');
  return {
    type: 'ADDRECIPE',
    recipe,
  };
};

// ACTION: Delete all items from local store
export const deleteAll = () => {
  console.log('Removing all items');
  return {
    type: 'DELETEALL',
  };
};

// NO:
// export const removeItem = (id) => {
//   console.log('Removing item to local state');
//   return {
//     type: 'REMOVEITEM',
//     id,
//   };
// };

// Redux thunk: devulve una función que hace un dispatch
// de las acciones de redux indicadas (addItem)

// THUNK: Call API to save an ingredient and dispatch a addItem() action
export const saveOnServer = (ingredient) => {
  console.log('Saving on server...');
  return async (dispatch) => {
    const saveIng = await addIngredient(ingredient);
    dispatch(addItem(saveIng));
  };
};

export const saveOnServerRecipe = (recipe) => {
  console.log('Saving on server...');
  return async (dispatch) => {
    const saveRec = await addRecipe(recipe);
    dispatch(addRecipeItem(saveRec));
  };
};
// THUNK: request API ingredients, Dispatch deleteAll() action,
// dispatch one addItem action for each ingredient recived by the API
export const refreshServerIngredients = () => async (dispatch) => {
  const ingreds = await getIngredients();
  dispatch(deleteAll());
  console.log('ingred', ingreds);
  ingreds.forEach((ing) => dispatch(addItem(ing)));
};

export const refreshServerRecipes = () => async (dispatch) => {
  const recips = await getRecipe();
  dispatch(deleteAll());
  recips.forEach((rec) => dispatch(addRecipeItem(rec)));
};

// THUNK: delete ingredient on server via API call and refresh
// local visualization by bruteforce get all ingredients
// aNote: this can be improve by removing the local deleted ingredient
//  without requesting a refresh
export const deleteOneIngredient = (id:string) => async (dispatch) => {
  await deleteIngredient(id);
  dispatch(refreshServerIngredients);
};

export const deleteOneRecipe = (id: string) => async (dispatch) => {
  await deleteRecipe(id);
  dispatch(refreshServerRecipes);
};
