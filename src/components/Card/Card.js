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
                <p className='Card-category'>{category}</p>
                <p className='Card-title'><strong>{title}</strong></p>
                <p className='Card-description'>{description}</p>
                <div className='Card-various'>
                    <p className='Card-author'>{author}</p>
                    <p className='Card-date-read'>{publicationDate}, {readTime}</p>
                    <div className='icons-m'>
                        <i className="fas fa-ellipsis-h"></i>
                        <i className="far fa-bookmark"></i>
                    </div>
                </div>
            </div>
            <div >
                <figure>
                    <img className='Card-image' alt='card-p' src={'https://picsum.photos/200/300/?blur=2'} />
                </figure>
            </div>
        </div>
    )
}
export default Card;