import React, {Component} from 'react'

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    


    render() {
        
        let backgroundBox = {
            backgroundColor: 'rgb(211, 205, 205)',
            width: '100%',
            height: '50vh',
            margin: '10vh 8vw 0 8vw',
            position: 'relative'
        }

        let counterStyle = {
            alignSelf: 'flex-end',
            position: 'absolute',
            top: '0',
            right: '0',
            margin: '0 1vw 0 0',
            fontSize: '2em',
            fontWeight: '900'
        }

        let slideStyle = {
            display: 'flex',
            flexDirection: 'Column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            margin: '20px',
            textAlign: 'left'
        }

        let nameStyle = {
            fontWeight: '900',
            textDecoration: 'underline',
            textDecorationColor: 'rgb(25, 144, 241)',
            fontSize: '2em',
        }

        let listStyle = {
            listStyleType: 'None'
        }

        let listStyle2 = {
            listStyleType: 'None',
            margin: '0 0 0 2em',
            
        }

        let spanStyle = {
            fontWeight: '900'
        }

        return(
            <div style={backgroundBox}>
                <p className="slidePosition" style={counterStyle}>{this.props.count}/25</p>
                <div className="slideinfo" style={slideStyle}>
                <ul><span style={nameStyle}>{this.props.name}</span>
                    <li style={listStyle}><span style={spanStyle}>From:</span> {this.props.from}</li>
                    <li style={listStyle}><span style={spanStyle}>Job Title:</span> {this.props.job}</li>
                    <li style={listStyle}><span style={spanStyle}>Employer:</span> {this.props.employer}</li>
                </ul>
                <ul ><span style={spanStyle}>Favorite Movies:</span>
                    <li style={listStyle2}>{`1. ${this.props.movie1}`}</li>
                    <li style={listStyle2}>{`2. ${this.props.movie2}`}</li>
                    <li style={listStyle2}>{`3. ${this.props.movie3}`}</li>
                </ul>
                </div>
            </div>
        )
    }
}
export default Main