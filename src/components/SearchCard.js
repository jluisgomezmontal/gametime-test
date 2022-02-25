import React from 'react'

export const SearchCard = ({id, img, title, subtitle}) => {

  // Simple SearchCard component
  return (
    <div className="tarjeta" key={id}>
        <img src={img} alt={title} />
        <div>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    </div>
  )
}
