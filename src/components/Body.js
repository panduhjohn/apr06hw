import React from 'react'
import faker from 'faker'
import Square from './Square'

const Body = (props) => {
    return (
        <div style={{ width: '80vw', height: '770px', backgroundColor: 'green'  }}>
            <img src={faker.image.avatar()} alt='...' />
            
            <p>{faker.lorem.paragraph()}</p>

            <div style={{ display: 'flex', flexDirection: 'row', width: '200px', height: '300px;', marginRight: '10px' }}>
                <Square name='Square1'/>
                <Square name='Square2'/>
                <Square name='Square3'/>
                <Square name='Square4'/>
            </div>
        </div>
    )
}

export default Body