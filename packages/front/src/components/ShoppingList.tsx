import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Item } from './Item';
import { InputItem } from './InputItem';
import { refreshServerIngredients } from '../lib/redux/actions';
import { useIngredient } from '../lib/useIngredients';

export const ShoppingList = (props) => {
  const dispatch = useDispatch();

  const { ingredients } = useIngredient();

  useEffect(() => {
    const intervalID = setInterval(() => {
      dispatch(refreshServerIngredients());
    }, 5000);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <div>
      <div>
        {/* Mantenemos este property driling: */}
        <InputItem />
      </div>
      {/* <pre>{JSON.stringify(ingredients, null, 2)}</pre> */}
      {ingredients.map((it) => <Item key={it._id} item={it} />)}
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   ingredients: state.ingredients,
//   suger: false,
//   color: 'red',
// });

// export const ShoppingList = connect(mapStateToProps)(UnconnectedShoppingList);
