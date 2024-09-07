import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config();

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export const publicRepositories = async () => {
  // console.log('GH_API_KEY::', process.env.GH_API_KEY);
  // const res = await api.get('/users/vgeruso/repos', {
  //   headers: {
  //     Authorization: `bearer ${process.env.GH_API_KEY}`,
  //   },
  // });
  // console.log('res::', res);
};
