import {API_URL} from '../app/(home)/page';
import styles from "../styles/movie-video.module.css"

async function getVideos(id: string) {
    console.log(`Fetching videos: ${Date.now()}`)
     await new Promise((resolve) => setTimeout(resolve, 500))
    // throw new Error("Somthing Miss")
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
    
}

export default async function MovieVideos({id} :{id:string}) {
    const videos = await getVideos(id);
    // 4개까지만 보이기
    const index = videos.slice(0, 4)

    return (
        <div className={styles.container}>
            {index.map(video => 
            <iframe 
            key={video.id} 
            src={`https://youtube.com/embed/${video.key}`} 
            title={video.name } allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen/>
            )}
        </div>
    )
}