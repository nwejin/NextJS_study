// "use client"
import { Metadata } from "next";
import { resolve } from "path";
import { useEffect, useState } from "react";
import Link from 'next/link';

// 클라이언트 컴포넌트에서는 metadata export불가능
export const metadata: Metadata = {
  title: 'Home',
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

// ssr fetch방법
async function getMovies() {
    await new Promise((resolve) => setTimeout(resolve, 500))
    const response = await fetch(API_URL); //첫 fetch데이터만 요청
    const json = await response.json();
    return json;
}

// 로딩 상태를 위해 async
export default async function HomePage() {
    // "use client" : csr시 데이터를 불러오는 방법!

    // const [isLoading, setIsLoading] = useState(true);
    // const [movies, setMovies] = useState([]);

    // const getMovies = async () => {
    //     const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
    //     const json = await response.json();
    //     setMovies(json);
    //     setIsLoading(false);
    // }

    // useEffect(() => {
    // getMovies();
    // },[])

    // 기본
    const movies = await getMovies();
    return (
        <div>
            {movies.map((movie) =>
                <li key={movie.id}>
                    <Link href={`/movies/${movie.id}`}>{movie.title}
                    </Link>
                </li>
                )}
            {/* {JSON.stringify(movies)} */}
        </div>
    )
}