import Results from 'components/Results';
import React from 'react'




export async function getServerSideProps(context){
    const movieId = context.query.search

    
 const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${movieId}&language=en-US&include_adult=false`)
   const data= await res.json();
   const results = data.results
   
     if(!res.ok){
        throw new Error("oops movie not found")
     }
   return{
    props: {results}
   }

}


export default function searchTerm ({results}) {
    console.log(results)
   
 
    return (<div>
        {results && results.length === 0 && (
             <h1 className=''>No movie found</h1>
        )}
    {
      results &&   <Results results= {results}/>
    }
  

</div>
    )
  
}
