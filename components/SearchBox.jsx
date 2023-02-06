import React,{useState} from 'react'
import { useRouter } from 'next/navigation';
export default function SearchBox() {
    const [search, setSearch] = useState("");
    const router = useRouter()

    function handleSubmit(e){
    
       e.preventDefault()
       if(!search) return; 
       router.push(`/search/${search}`);
       

    }
  return (
    <form onSubmit={handleSubmit} className='max-w-6xl mx-auto flex justify-between items-center px-5  '>
        <input onChange={(e)=>setSearch(e.target.value)} value={search} type="text" placeholder='Search movie...' 
        className='flex-1 h-14 rounded-sm placeholder-cyan-50 outline-none bg-transparent ml-2'/>
        <button disabled={!search} type='submit' className='text-orange-700 disabled:text-gray-600'>Search</button>
    </form>
  )
}
