import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div
            style={{
                height: '100px',
                width: '100vw',
                backgroundColor: 'red',
                paddingTop: '40px',
                paddingLeft: '50px',
            }}
        >
            ©RoaminHD {currentYear}
            
        </div>
    );
}

export default Footer