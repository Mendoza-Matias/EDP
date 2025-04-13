// URL base de la API de Pokémon
const BASE_URL = 'https://pokeapi.co/api/v2/';

/**
 * Función asíncrona que obtiene datos de la API de Pokémon.
 * Devuelve una promesa que resuelve con los datos en formato JSON.
 */
const pokemons = async () => {
    try {
        // Espera la respuesta del servidor al hacer la solicitud fetch
        const res = await fetch(`${BASE_URL}pokemon`);

        // Si la respuesta no es exitosa, lanza un error con el código de estado
        if (!res.ok) {
            throw new Error(`Response status: ${res.status}`);
        }

        // Convierte la respuesta a JSON y la retorna
        return await res.json();
    } catch (error) {
        // Muestra un mensaje de error en consola si algo falla
        console.error('Error al obtener los Pokémon:', error);
        throw error; // Lanza el error para que pueda ser manejado desde donde se llama la función
    }
}

// Exporta la función para que pueda ser utilizada en otros módulos
module.exports = {
    pokemons
};
