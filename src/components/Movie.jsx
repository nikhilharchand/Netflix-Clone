import React,{useState} from 'react'
import {FaHeart,FaRegHeart} from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import {arrayUnion,doc,updateDoc} from 'firebase/firestore'

const Movie = ({item}) => {
    const [like,setLike]=useState(false);
    const [saved,setSaved]=useState(false);
    const {user}=UserAuth();

    const movieID=doc(db,'users',`${user?.email}`)
    
    const saveShow = async() => {
      if(user?.email){
        setLike(!like)
        setSaved(true)
        await updateDoc(movieID, {
          savedShows: arrayUnion({
            id:item.id,
            title:item.title,
            img:item.backdrop_path,
          }),
        });
      } else {
        alert('please log in to save a movie')
      }
    };
  return (
    <div className='w-[250px] sm:w[200px] md:w[240px] lg:w[280px]  cursor-pointer inline-block relative px-4 '>
    <img 
    className=" w-full h-auto block " 
    src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} 
    alt={item?.title}
    />
    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/70 opacity-0 hover:opacity-100 text-white'>
    <p className="text-sm md:text-sm flex justify-center items-center h-full text-center ">
    {item?.title}
    </p>
    <p onClick={saveShow}>
      {like ? ( <FaHeart className='absolute top-1 left-5 text-grey-300'/> ):( <FaRegHeart className='absolute top-1 left-5 text-grey-300' />
      )}
    </p>
  </div>
  </div> 
  );
};
export default Movie;