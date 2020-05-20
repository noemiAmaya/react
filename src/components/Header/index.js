import React from 'react'

//css
import './Header.css'

function Header(title, description) {
    return (
        <Header>
            <h1>{title}</h1>
            <p> {description}</p>
        </Header>


    )
}

export default Header;