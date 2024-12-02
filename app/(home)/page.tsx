export const metadata = {
    title: "Home",
}

const URL = "http://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies(){
    // return fetch(URL).then(response => response.json());
    const response = await fetch(URL);
    const json = await response.json();
    return json;
}

export default function Page(){
    

    return (
        <div>
           {JSON.stringify(movies)}
        </div>
    )
}