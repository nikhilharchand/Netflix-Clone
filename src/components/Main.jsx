import React,{useEffect, useState} from 'react'
import axios from "axios"
import requests from '../Requests'
const Main = () => {
    const [movies,setMovies]=useState([])

    const movie=movies[Math.floor(Math.random()*movies.length)]

   useEffect(()=>{
    axios.get(requests.requestPopular).then((response)=>{
        setMovies(response.data.results)
    })
   },[]);

   const truncateString=(str,num)=>{
    if(str?.length >num){
        return str.slice(0,num)+'...';
    }else{
        return str;
    }
   };

   return (
    <div className='relative w-full h-[550px] text-black'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-full bg-gradient-to-r from-black opacity-50'></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
  
        <div className="absolute inset-0 flex flex-col justify-center ">
          <h1 className='text-3xl md:text-5xl z-10 relative text-white'>{movie?.title}</h1>
          <div className='my-4'>
            <button className="border bg-white text-black border-grey-300 py-2 px-5">Play</button>
            <button className="border text-white border-grey-300 py-2 px-5 ml-4">Watch Later</button>
          </div>
          <p className='text-white text-sm'>Released:{movie?.release_date}</p>
          <p className="text-white w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] py-2">{truncateString(movie?.overview,150)}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;