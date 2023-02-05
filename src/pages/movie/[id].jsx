import React from 'react'


export async function getServerSideProps(context){
    const movieId = context.query.id
 const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`)
   const data= await res.json();

   return{
    props: {data}
   }

}



export default function Movie({data}){
   
 return <div className='w-full'>
       <div className='p-4 m '></div>

 </div>
}



