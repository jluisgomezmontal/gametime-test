import React, { useEffect, useState } from 'react'
import { SearchCard } from './SearchCard';
import { Spinner } from './Spinner';

export const SearchBar = () => {

    // Variables

    const [search, setSearch] = useState('');
    const [events, setEvents] = useState([]);
    const [performers, setPerformers] = useState([]);
    const [venue, setVenue] = useState([]);
    const [loading, setLoading] = useState(false);


    // Calling the API using useEffect
    useEffect(() => {
        const getApi = async () =>{
            setLoading(true)
            const url = `https://mobile-staging.gametime.co/v1/search?q=${search}`
            const response = await fetch(url)
            const result = await response.json()
            setEvents(result.events.slice(0,3))
            setPerformers(result.performers)
            setVenue(result.venues)
            setLoading(false)
        }
        getApi()
    }, [search])

    // Handle input changes
    const handleInputChange = e => {
        setSearch(e.target.value)
    }
    

  return (
      <>
        <label>Find events in your city:</label>
        <input 
        className="input-search"    
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleInputChange}
        />

        {   
            search !== '' ?
            loading ? <Spinner/>:
            events.map(event =>(
                <SearchCard
                key={event.event.id}
                id={event.event.id}
                    img={event.performers[0].hero_image_url}
                    title={event.event.name}
                    subtitle={event.venue.name}
                    />
                    )):null
                    
                }
        {
            search !== '' ?
            loading ? null:
            performers.map(({id, hero_image_url, name, category}) => (
                <SearchCard
                key={id}
                id={id}
                img={hero_image_url}
                title={name}
                subtitle={category}
                />
                )):null
                
            }
            {
                search !== '' ?
                loading ? null:
                venue.map( ({id, image_url, name, city}) =>(
                    <SearchCard
                        key={id}
                        id={id}
                        img={image_url}
                        title={name}
                        subtitle={city}
                    />
                )):null
        }
        
    </>
  )
}
