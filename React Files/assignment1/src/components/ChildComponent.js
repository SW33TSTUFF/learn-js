import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('simaak')}>Greet parent</button>
        </div>
    )
}

export default ChildComponent
