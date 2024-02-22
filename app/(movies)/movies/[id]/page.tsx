import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";


export default async function MovieDetail({params: {id}}: {params: {id: string}}) {

    // await 방식은 순차적으로 처리하기에 시간이 오래 걸릴 수 있음
    // const movie = await getMoive(id);
    // const videos = await getVideos(id);

    // promise.all 활용 시 동시에 처리 (병렬)
    // const [movie, videos] = await Promise.all([getMoive(id), getVideos(id)])
    // ex)
    // movie = getMovie(id)
    // video = getVideos(id)

    return (
        <div>
        <h3>Movie Detail Page</h3>
        {/* Suspense 컴포넌트가 await 해줌*/}
        <Suspense fallback={<h1>Loading movie info </h1>}>
            <MovieInfo id = {id}/>
        </Suspense>

        <Suspense fallback={<h1>Loading movie video </h1>}>
            <MovieVideos id = {id}/>
        </Suspense>
        </div>     
    )
}