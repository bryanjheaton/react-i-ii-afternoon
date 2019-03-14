import React, {Component} from 'react'

let navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100vw'
}

let buttonStyle = {
    display: 'flex',
    alignItems: '',
    borderRadius: '50px',
    // height: '5vh'
}

let button1 = {
    borderRadius: '50px',
    width: '120px',
    margin: '2vh',
    color: 'white',
    // backgroundColor: 'rgb(25, 144, 241)',
    border: '0',
    boxShadow: 'none',
    fontSize: '20px'
}


let button2 = {
    borderRadius: '50px',
    width: '5em',
    margin: '2vh',
    color: 'white',
    backgroundColor: 'rgb(25, 144, 241)',
    border: '0',
    boxShadow: 'none',
    fontWeight: '900'
}

function Navbar (props) {
    return (
        <div style={navStyle}>
            <h1 style={button1} onClick={(e) => props.decreaser()}>{'< Previous'}</h1>
            <section style={buttonStyle}>
                <button style={button2}>Edit</button>
                <button style={button2}>Delete</button>
                <button style={button2}>New</button>
            </section>
            <h1 style={button1} onClick={(e) => props.increaser()}>Next ></h1>
        </div>
    )

}

export default Navbar