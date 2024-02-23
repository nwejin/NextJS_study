import {API_URL} from '../app/constants';
import styles from '../styles/movie.info.module.css';
import MovieProduction from './movie-production';
import Link from 'next/link';

export async function getMoive(id: string) {
    console.log(`Fetching movies: ${Date.now()}`)
    await new Promise((resolve) => setTimeout(resolve, 500))
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function MovieInfo({id} :{id:string}) {

    const movie = await getMoive(id);
    // console.log(movie.production_companies)
    const infos = movie.production_companies.slice(0, 1)

    return (
        <div className={styles.container}>
      
        <img src={movie.poster_path} alt={movie.title} className={styles.poster} />
        <div className={styles.info}>
            <h1 className={styles.title}>{movie.title}</h1>
            <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
            <p >{movie.overview}</p>
            <a href={movie.homepage} target={"_blank"}> homepage →</a>
            <Link href={`/movies/${id}/credits`}>
              show credits
            </Link>

            <div className={styles.comapanyInfo}>
              {infos.map((company) => 
                <MovieProduction key={company.id} logo={company.logo_path} name={company.name}></MovieProduction>
              )}
            </div>
        </div>
        </div>
        
    )
} 