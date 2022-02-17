import axios from 'axios';

const apiBaseURL = 'http://localhost:3000';

const api = axios.create({ baseURL: apiBaseURL });

export const getIngredients = async () => {
  const res = await api.get('/ingredients');
  return res.data;
};

export const addIngredient = async (data) => {
  const res = await api.post('/ingredients', data);
  return res.data;
};

export const deleteIngredient = async (ingId) => {
  const res = await api.get(`/ingredients/${ingId}/delete`);
  return res.data;
};

export const getRecipe = async () => {
  const res = await api.get('/recipe');
  return res.data;
};

export const addRecipe = async (data) => {
  const res = await api.post('/recipe', data);
  return res.data;
};

export const deleteRecipe = async (recId) => {
  const res = await api.get(`/recipe/${recId}/delete`);
  return res.data;
};
