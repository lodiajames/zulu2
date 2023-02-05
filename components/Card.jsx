import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {FaRegThumbsUp} from 'react-icons/fa'


export default function Card({result}) {
  return (
    <div className='sm:p-3 sm:hover:shadow-slate-300 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 sm:hover:cursor-pointer transition-shadow duration-200 ease-out group'>
       <Link href={`/movie/${result.id}`}>
       {/* <Link href="https://www.imdb.com/"> */}

        <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path} `} width={500} height={300}
        
        className="transition-opacity duration-200 ease-in-out rounded-t-lg sm:rounded-t-lg group-hover:opacity-80"
        placeholder='blur' blurDataURL='/loading.svg' alt='loading' style={{
            maxWidth:"100%", height:"auto"
        }}>

        </Image>
        <div className='p-2'>
            <p className='text-md line-clamp-2'>{result.overview}</p>
             <h2 className='truncate text-lg font-bold'>{result.title || result.name}</h2>
             <p className='flex items-center'>
                {result.release_date || result.first_air_date}
               <FaRegThumbsUp className='h-5 mr-1 ml-3'/> {result.vote_count}
             </p>
              
        </div>

       </Link>
        </div>
  )
}
