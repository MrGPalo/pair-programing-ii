import React from 'react';
import { HaveIngredient } from './HaveIngredient';
import { FullRecipe } from './FullRecipe';

const recipe = ['apples', 'butter', 'flour', 'eggs', 'milk'];

export const Recipe = () => (
  <div>
    <h2>Recipe</h2>
    {recipe.map((e) => <HaveIngredient key={e} ing={e} />)}
    <FullRecipe recipe={recipe} />
  </div>
);
