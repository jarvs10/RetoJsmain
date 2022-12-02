
export const getMovies = async () => {
    
    const response = await fetch(import.meta.env.VITE_API_URL);
    const result = await response.json();

    return result;
}

export const editMovies = async (id) => {
    
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
    const result = await response.json();

    return result;
}