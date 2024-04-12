// Unsplash API

const count = 10;
const apiKey = 'SpHFO3HwaT9Kngog-TE2MWc8Vz0pXC6uffOdfoZ_3u0'
console.log(apiKey);
const apiUrl = 'https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}';

console.log(apiUrl);


// Get photos from Unsplash API

async function getPhotos() {

    try {

        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);

    } catch (error) {
        // Catch error here
    }
}

// On Load
getPhotos();