import React, { Component } from 'react'
import "./OwnersList.css";

class OwnersList extends Component {
  render() {
    let animalNames = [];
    this.props.animals.map(animal =>
      animalNames.push(animal)
    )
    this.props.owners.map(owner =>
      owner.animal = animalNames[owner.animalId - 1]
    )
    return (
      <div>
        <header>ANIMAL OWNERS</header>
        {
          this.props.owners.map(owner =>
            < section className="owners" key={owner.id} >
              <h4>{owner.name}</h4>
              <h5>Owner of {owner.animal.name}, a {owner.animal.breed}.</h5>
            </section>
          )
        }
      </div>
    )
  }
}




export default OwnersList