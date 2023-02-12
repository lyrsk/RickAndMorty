const baseUrl = 'https://rickandmortyapi.com/api';

const getCharacters = async (page) => {
  const res = await fetch(`${baseUrl}/character?page=${page}`);
  const data = await res.json();
  return data;
};