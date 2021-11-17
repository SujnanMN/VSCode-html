import React from 'react'

function Person({human}) {
    return (
        <div>
        <h2> i am {human.name},i am {human.age} years old and my skill is {human.skill}</h2>
        </div>
    )
}

export default Person
