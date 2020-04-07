import React from 'react'
import faker from 'faker'
import Square from './Square'

const Body = () => {
    return (
        <div style={{ width: '80vw', height: '770px', backgroundColor: 'green' }}>This is the body
            <img src={faker.image.avatar()} alt='...' />
            
            <p>{faker.lorem.paragraph()}</p>
         
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        </div>
    )
}

export default Body