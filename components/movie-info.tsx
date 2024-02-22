import {API_URL} from '../app/(home route groups)/page';



async function getMoive(id: string) {
    console.log(`Fetching movies: ${Date.now()}`)
    await new Promise((resolve) => setTimeout(resolve, 500))
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function MovieInfo({id} :{id:string}) {
    const movie = await getMoive(id);
    return (
        <>
        <h6>{JSON.stringify(movie)}</h6>
        </>
    )
}