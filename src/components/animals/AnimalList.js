import React, { Component } from 'react'
import "./AnimalList.css";

class AnimalList extends Component {
  render() {
    return (
      <div>
        <header>CURRENT ANIMALS</header>
        {
          this.props.animals.map(animal =>
            <section className="animal" key={animal.id}>
              <h4>{animal.name}</h4>
              <h5>{animal.breed}</h5>
            </section>)
        }
      </div>
    )
  }
}




export default AnimalList