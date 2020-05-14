import React, { Component } from './node_modules/react'

function Clock() {
    return (
        <div>
            <p> Hola la hora es: {new Date().toLocaleDateString()}</p>
        </div>
    )
}

export default Clock;