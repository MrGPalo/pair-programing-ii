import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { refreshServerRecipes } from '../lib/redux/actions';
import { useRecipes } from '../lib/useRecipes';
import { InputRecipe } from './InputRecipe';
import { RecipeItem } from './RecipeItem';

export const RecipeContext = (props) => {
  const dispatch = useDispatch();

  const { recipes } = useRecipes();

  useEffect(() => {
    const intervalID = setInterval(() => {
      dispatch(refreshServerRecipes());
    }, 5000);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <div>
      <div>
        {/* Mantenemos este property driling: */}
        <InputRecipe />
      </div>
      {/* <pre>{JSON.stringify(ingredients, null, 2)}</pre> */}
      {recipes.map((e) => <RecipeItem key={e._id} item={e} />)}

    </div>
  );
};

// const mapStateToProps = (state) => ({
//   ingredients: state.ingredients,
//   suger: false,
//   color: 'red',
// });

// export const ShoppingList = connect(mapStateToProps)(UnconnectedShoppingList);
