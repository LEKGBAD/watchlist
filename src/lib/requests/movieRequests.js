import { options } from ".";


export const getPopularity=async ()=>{
    try {
        const response = await fetch('https://flixster.p.rapidapi.com/movies/get-popularity', options);
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error);
    }
    
}

export const getMovieDetails=async (emsVersionId)=>{
    try {
        const response = await fetch(`https://flixster.p.rapidapi.com/movies/detail?emsVersionId=${emsVersionId}`, options);
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error);
    }
    
}

export const searchMovies=async (movieName)=>{
    try {
        const response = await fetch(`https://flixster.p.rapidapi.com/search?query=${movieName}`, options);
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error);
    }
    
}

