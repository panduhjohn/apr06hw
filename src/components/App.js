import React from 'react'

import Footer from './Footer'
import Body from './Body'
import Nav from './Nav'
import Sidebar from './Sidebar'



const App = () => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap'}}>
            <Nav />
            <Sidebar />
            <Body />
            <Footer />
        </div>
    );
}

export default App