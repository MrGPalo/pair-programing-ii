/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { Form_Recipe } from './components/FormRecipe';
import { InputRecipe } from './components/InputRecipe';
import { Recipe } from './components/Recipe';
import { RecipeContext } from './components/RecipeContext';
import { RecipeItem } from './components/RecipeItem';
import { ShoppingList } from './components/ShoppingList';
import { store } from './lib/redux/store';

const Flex = styled.div`
display:flex;
align-items: flex-start;
justify-content: center;
flex-wrap: wrap;
`;

const Box = styled.div`
padding: 10px;
border: 1px solid red;
`;

export const App = () => (
  <div>
    <Provider store={store}>
      <Flex>
        <div style={{ width: '100%', textAlign: 'center' }}>
          <h2>App Shopping list</h2>
        </div>
        <Box>
          <ShoppingList color="green" />
        </Box>
        <Box>
          <Recipe />
        </Box>
        {/* <Box>
          <Form_Recipe />
        </Box>
        <Box>
          <New_Recipe />
        </Box> */}
        <Box>
          <RecipeContext />
        </Box>
      </Flex>
    </Provider>
  </div>
);
