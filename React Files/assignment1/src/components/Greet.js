import React from 'react'

// function Greet() {
//     return <h1>Hello Simaak</h1>
// }

export const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1> Hello {props.name} aka {props.heroName}</h1>
            {props.children}
        </div>)
}

export default Greet