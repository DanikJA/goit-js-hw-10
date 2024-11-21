import axios from "axios";
const breedSl = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';


document.addEventListener('DOMContentLoaded', () => {
  loader.classList.remove('is-hidden');
  breedSl.classList.add('is-hidden');

  
  fetchBreeds()
    .then(breeds => {
      breedSl.innerHTML = breeds
        .map(breed => `<option value="${breed.id}">${breed.name}</option>`)
        .join('');
      loader.classList.add('is-hidden');
      breedSl.classList.remove('is-hidden');
    })
    .catch(() => {
      error.classList.remove('is-hidden');
      loader.classList.add('is-hidden');
    });
});


breedSl.addEventListener('change', event => {
  const breedId = event.target.value;

  if (!breedId) return;

  catInfo.innerHTML = '';
  loader.classList.remove('is-hidden');
  error.classList.add('is-hidden');

  fetchCatByBreed(breedId)
    .then(cat => {
      const { url, breeds } = cat;
      const { name, description, temperament } = breeds[0];
      catInfo.innerHTML = `
        <img src="${url}" alt="${name}" width="400" hights ="400">
        <h2>${name}</h2>
        <p>${description}</p>
        <p><strong>Temperament:</strong> ${temperament}</p>
      `;
      loader.classList.add('is-hidden');
    })
    .catch(() => {
      error.classList.remove('is-hidden');
      loader.classList.add('is-hidden');
    });
});




