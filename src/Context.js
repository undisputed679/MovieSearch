// Context {wareHouse}
// Provider {Delivery Boy}
// Consumer {You}

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'

export const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [isLoading,setIsLoading] = useState(true);
    const [movie,setMovie] = useState([]);
    const [isError,setIsError] = useState({show:"false",msg:""})
    const [query,setQuery] = useState("titanic");
  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
      if(data.Response==="True"){
        setIsLoading(false);
        setMovie(data.Search)
        setIsError({
          show:false,
          msg:"",
      })
      }else{
        setIsError({
            show:true,
            msg:data.Error,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovies(`${API_URL}&s=${query}`);
    }, 1000);
    // console.log("set");
    return () => {
      clearTimeout(timeOut);
      // console.log("clear");
    };
  }, [query]);
  return <AppContext.Provider value={{isError,isLoading,movie,query,setQuery}}>{children}</AppContext.Provider>
}
//Global Context
const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }
