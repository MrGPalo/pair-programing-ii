import axios from 'axios';

export const validator = async (str) => {
  const data = await axios.get('http://localhost:3000/recipe');
  data.data.map((e) => {
    if (e.name !== str) {
      return true;
    } return false;
  });
};
