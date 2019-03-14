import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header'
import Navbar from './components/navbar'
import Main from './components/mainsection'
import Data from './data'

let styles = {
  backgroundColor: 'rgb(31, 29, 29)',
  height: '100vh'
}

let divstyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw'
}



class App extends Component {
  constructor() {
    super()

    this.state = {
      counter: 1,
      firstName: Data[0].name.first,
      lastName: Data[0].name.last,
      fromCity: Data[0].city,
      fromCountry: Data[0].country,
      jobTitle: Data[0].job,
      employer: Data[0].employer,
      favmovie1: Data[0].favoriteMovies[0],
      favmovie2: Data[0].favoriteMovies[1],
      favmovie3: Data[0].favoriteMovies[2]
    }
    this.counterIncrease = this.counterIncrease.bind(this)
    this.counterDecrease = this.counterDecrease.bind(this)
    this.updateState = this.updateState.bind(this)
  }

  updateState() {
    this.setState({
      firstName: Data[this.state.counter-1].name.first,
      lastName: Data[this.state.counter-1].name.last,
      fromCity: Data[this.state.counter-1].city,
      fromCountry: Data[this.state.counter-1].country,
      jobTitle: Data[this.state.counter-1].title,
      employer: Data[this.state.counter-1].employer,
      favmovie1: Data[this.state.counter-1].favoriteMovies[0],
      favmovie2: Data[this.state.counter-1].favoriteMovies[1],
      favmovie3: Data[this.state.counter-1].favoriteMovies[2]
    })
  }

  counterIncrease() {
    if (this.state.counter < 25) {
      this.setState({counter: this.state.counter + 1});
      console.log(this.state.counter);
      this.updateState();
    } else {
      return
    }
  }
  
  counterDecrease() {
    if (this.state.counter > 1) {
      this.setState({counter: this.state.counter - 1})
      console.log(this.state.counter);
      this.updateState()
    } else {
      return
    }
  }

  // componentDidMount() {
  //   setTimeout(this.updateState(), 1000)
  // }

  render() {
    
    
    return (
      <div className="App">
        <section style={styles}>
          <Header />
          <div style={divstyle}>
          <Main count={this.state.counter} 
          name={`${Data[this.state.counter-1].name.first} ${Data[this.state.counter-1].name.last}`} 
          from={`${Data[this.state.counter-1].city}, ${Data[this.state.counter-1].country}`}
          job={`${Data[this.state.counter-1].title}`}
          employer={`${Data[this.state.counter-1].employer}`}
          movie1={`${Data[this.state.counter-1].favoriteMovies[0]}`}
          movie2={`${Data[this.state.counter-1].favoriteMovies[1]}`}
          movie3={`${Data[this.state.counter-1].favoriteMovies[2]}`}
          />
          </div>
          <div>
          <Navbar increaser={this.counterIncrease} decreaser={this.counterDecrease}/> 
          </div>
        </section>
      </div>
    );
  }
}

export default App;
