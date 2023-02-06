import React from 'react'
import Image from 'next/image';


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
       <div className='p-4 mt-8 flex flex-col md:flex-row items-center content-center max-6xl mx-auto mb:space-x-6'>

       <Image src={`https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path} `} width={500} height={300}
        
        className="rounded-lg"
        placeholder='blur' blurDataURL='/loading.svg' alt='movie pic' style={{
            maxWidth:"100%", height:"100%"
        }}>

        </Image>
        <div className='p-2'>
              <h2 className='text-lg mb-3 font-bold text-center'>{data.title || data.name} </h2>
              <p className='text-lg mb-2'><span className='font-semibold mr-2 text-red-200'>Summary:</span>{data.overview}</p>
              <p className='text-lg font-bold'><span  className='font-semibold mr-1 text-red-200'>Released Date:</span>{data.release_date || data.first_air_date}</p>
              <p className='text-lg font-bold'><span  className='font-semibold mr-1 text-red-200'>Genres:</span>{data.genres.map(genre=> genre.name)}</p>

          </div>
       </div>

 </div>
}



