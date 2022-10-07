import React from 'react'
import { useContext } from 'react'
import { AppContext, useGlobalContext } from './Context'
import { Movies } from './Movies'
import { Search } from './Search'

const Home = () => {
    // const name = useContext(AppContext)
    // const name = useGlobalContext();
  return (
    <div>
      <Search/>
      <Movies/>
      {/* <p>{name}</p> */}
    </div>
  )
}

export default Home
