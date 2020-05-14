import React from 'react'
import './Card.css'


function Card({
    category,
    title,
    description,
    author,
    publicationDate,
    readTime,
}) {
    return (
        <div className='Card'>
            <div className='Card-content'>
                <p className= 'style-category'>{category}</p>
                <p className='style-title'><strong>{title}</strong></p>
                <p>{description}</p>
                <p>{author}</p>
                <p>{publicationDate}, {readTime}</p>
            </div>
            <div >
                <figure>
                    <img className='Card-image' alt='card-p' src={'https://picsum.photos/200/300'} />
                </figure>
            </div>
        </div>
    )
}
export default Card;