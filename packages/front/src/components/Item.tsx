/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteOneIngredient } from '../lib/redux/actions';

const ItemWrap = styled.div`
padding: 5px;
border: 1px solid red;
margin: 5px;
display: flex;
justify-content: space-between;
`;

export const Item = ({ item: { _id, name, quantity } }) => {
  const dispatch = useDispatch();
  return (
    <ItemWrap>
      <div>
        {' '}
        {name}
        {' '}
        x
        {' '}
        {quantity}
      </div>
      <div>
        <a href="#" onClick={() => dispatch(deleteOneIngredient(_id))}>Delete</a>
      </div>
    </ItemWrap>
  );
};
