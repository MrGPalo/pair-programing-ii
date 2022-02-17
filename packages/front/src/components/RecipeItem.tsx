/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteOneRecipe } from '../lib/redux/actions';

const ItemWrap = styled.div`
padding: 5px;
border: 1px solid red;
margin: 5px;
display: flex;
justify-content: space-between;
`;

export const RecipeItem = ({
  item: {
    _id, name, instructions, price, ingredients,
  },
}) => {
  const dispatch = useDispatch();
  return (
    <ItemWrap>
      <div>
        {' '}
        {name}
        {' '}
        x
        {' '}
        {instructions}
        x
        {' '}
        {price}
        x
        {' '}
        {ingredients}

      </div>
      <div>
        <a href="#" onClick={() => dispatch(deleteOneRecipe(_id))}>Delete</a>
      </div>
    </ItemWrap>
  );
};
