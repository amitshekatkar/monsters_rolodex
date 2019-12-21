import React from 'react'
import "./Card.css"

export const Card = (props) => {

    return (
        <div className="card">
            <img  alt="user" src={`https://robohash.org/${props.user.id}?set=set2&size=180x180`}/>
            <h2>{props.user.name}</h2>
            <p>{props.user.email}</p>
        </div>
    )
}
