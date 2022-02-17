import { useSelector } from 'react-redux';

const internalHasIngredient = (ingredients, ing) => ingredients.filter((e) => e.name === ing)
  .length > 0;

const internalGetMissingIngredients = (ingredients, recipe) => {
  const completedIngredients = recipe
    .filter((ingredient) => ingredients.map((e) => e.name)
      .includes(ingredient));

  const setRecipe = new Set(completedIngredients);
  const missingIngredients = new Set([...recipe].filter((x) => !setRecipe.has(x)));

  // Para ver los elementos que faltan
  // console.log('missingIngredients:', missingIngredients);

  //  Para ver los elementos de la receta:
  // console.log('completedIngredients:', completedIngredients);

  return {
    missingIngredients,
    completed: completedIngredients.length === recipe.length,
  };
};

export const useIngredient = () => {
  const ingredients = useSelector((state) => state.ingredients);

  return {
    ingredients,
    hasIngredient: (ing) => internalHasIngredient(ingredients, ing),
    getMissingIngredients: (recipe) => internalGetMissingIngredients(ingredients, recipe),
  };
};
