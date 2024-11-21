import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_cmppCuxlGxTnOQrBdEUO1j64jv5IIMYg5drckkjOBhOMUVKzjemzbakBsmplldkC";

const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
// const API_KEY = 'live_cmppCuxlGxTnOQrBdEUO1j64jv5IIMYg5drckkjOBhOMUVKzjemzbakBsmplldkC'

export function fetchBreeds() {
    return axios.get(BASE_URL)
        .then(response => {
            if (!response.data) {
                throw new Error('Дані не отримано з API');
            }
            return response.data;
        })
    .catch (error => {
    console.error("Error fetching breeds:", error);
    throw (error);
})
};


export function fetchCatByBreed(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data[0]);
}


