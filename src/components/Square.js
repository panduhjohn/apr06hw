import React from 'react'
import faker from 'faker'

const Square = (props) => {
    return (
        <div>
            <img src={faker.image.avatar()} alt='...' />
            <p>{props.name}</p>
        </div>
    );
}

export default Square