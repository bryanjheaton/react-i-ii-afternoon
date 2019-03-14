import React from 'react'

function Header () {
    let styles = {
        backgroundColor: '#3e7bf5',
        color: 'black',
        width: '100vw',
        display: 'flex',
        // flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    }
    
    let styles2 = {
        margin: '20px',
        fontSize: '25px'
    }

    return (
        <div style={styles}>
            <h1 style={styles2}>Home</h1>
        </div>
    )
}

export default Header