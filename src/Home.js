import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component{
  state = {
    people: []
  }
  componentDidMount(){
    axios.get('https://swapi.co/api/people/')
      .then(res =>{
        console.log(res)
        this.setState({
          people: res.data.results.slice(0,5)
        })
      })
  }
  render(){
    const { people } = this.state;
    const peopleList = people.length ? (
      people.map(people => {
        return(
          <div className="card">
            <div className="card-content">
              <h2>{people.name}</h2>
              <p>Height: {people.height}</p>
              <p>Gender: {people.gender}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div>
        Silence...
      </div>
    )
    return(
      <div className="list">
        {peopleList}
      </div>
    )
  }
}
export default Home