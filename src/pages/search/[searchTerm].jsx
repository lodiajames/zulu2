import Results from 'components/Results';
import React from 'react'



export async function getServerSideProps(context){
 
    const keyword =  context.query.searchTerm 
   
   
    console.log("keyword " + keyword)

    
 const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${keyword}&language=en-US&include_adult=false`)
   const data= await res.json();
   const results =  data.results
   
   
   return{
    props: {results}
 
   }


}


export default function searchTerm ({results}) {
    console.log(results)
   
 
    return (<div>
        {results && results.length === 0 && (
             <h1 className='text-red-700 text-center'>No movie found</h1>
        )}
    {
     results && <Results  results={results}/>
    }
  

</div>
    )
  
}
