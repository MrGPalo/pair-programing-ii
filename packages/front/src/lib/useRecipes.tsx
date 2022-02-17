import { useSelector } from 'react-redux';

const internalHasRecipes = (recipes, ing) => recipes.filter((e) => e.name === ing)
  .length > 0;

// const internalGetMissingRecipes = (recipes, recipe) => {
//   const completedRecipes = recipe
//     .filter((ingredient) => recipes.map((e) => e.name)
//       .includes(ingredient));

//   const setRecipe = new Set(completedRecipes);
//   const missingRecipes = new Set([...recipe].filter((x) => !setRecipe.has(x)));

//   // Para ver los elementos que faltan
//   // console.log('missingIngredients:', missingIngredients);

//   //  Para ver los elementos de la receta:
//   // console.log('completedIngredients:', completedIngredients);

//   return {
//     missingRecipes,
//     completed: completedRecipes.length === recipe.length,
//   };
// };

export const useRecipes = () => {
  const recipes = useSelector((state) => {
    state.recipes;
  });
  console.log(recipes);
  return {
    recipes,
    hasRecipes: (ing) => internalHasRecipes(recipes, ing),
    // getMissingRecipes: (recipe) => internalGetMissingRecipes(recipes, recipe),
  };
};
