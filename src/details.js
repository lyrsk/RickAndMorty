import {getCharacter} from "./services/getData.js";

const container = document.querySelector('#characters');
const loader = document.querySelector('#lds-ring');
const getID = localStorage.getItem('charID');

const loadCharacter = async (id) => {
    loader.style.display = 'grid';
    const data = await getCharacter(id);
    loader.style.display = 'none';

    const article = document.createElement('article');
    article.setAttribute('class, character');
    article.innerHTML = `
    <img src='${data.image}'></img>
    <h2>${data.name}</h2>
    
    `
}
