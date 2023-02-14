const baseUrl = 'https://rickandmortyapi.com/api';

const getCharacters = async (page) => {
  const res = await fetch(`${baseUrl}/character?page=${page}`);
  const data = await res.json();
  return data;
};

const getCharacter = async (id) => {
  const res = await fetch(`${baseUrl}/character/${id}`);
  const data = await res.json();
  return data;
}

export {getCharacter, getCharacters}