import React from 'react'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'

export const GameTimeApp = () => {
  return (
    <>
        <Header/>
        <div className="container" >
            <SearchBar/>
        </div>
    </>
  )
}
