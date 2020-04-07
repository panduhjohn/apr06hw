import React from 'react'

const Sidebar = () => {
    return (
        <div style={{ width: '20vw', height: '770px', backgroundColor: 'orange' }}>
         
            <div className="ui list" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
            <div className="item">Chicken Wings</div>
            <div className="item">Beef Jerky</div>
            <div className="item">Ramen</div>
            <div className="item">Mandarin Oranges</div>
        </div>
        </div>
    )
}

export default Sidebar