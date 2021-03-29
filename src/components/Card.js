import React from 'react'

const Card = ({ name }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
    </div>
  )
}

export default Card
