
const API_KEY = process.env.API_KEY;


import Results from "components/Results";


export default function Home({results}) {


  return <div>
    
         <Results results= {results}/>
    
  </div>
  
}

export async function getServerSideProps(context) {
  
  const genre = context.query.genre || "fetchTrending";
  const request = await fetch(`https://api.themoviedb.org/3/${
    genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
  }?api_key=${API_KEY}&language=en-US&page=1`).then((response) => response.json());

  
  return {
    props: {
      results: request.results,
    },
  };
}
