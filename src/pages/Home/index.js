import React from "react";
//Components
import Header from '../../components/Header'

//css
import './Home.css'


function Home() {
    return (
        
        <div className='container'>
            <div>
                <Header
                title={'Hola Mundo'}
                description={'Esto es una prueba'}
                />
            </div>
        
        </div>
       
    )
}

export default Home;