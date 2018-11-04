import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import AnimalList from "./animals/AnimalList"
import "./Kennel.css";

class Kennel extends Component {

  employeesFromAPI = [
    { id: 1, name: "Jessica Davis" },
    { id: 2, name: "Jordan Nelson" },
    { id: 3, name: "Zoe LeBlanc" },
    { id: 4, name: "Blaise Roberts" }
  ]

  locationsFromAPI = [
    { id: 1, name: "Nashville North", address: "500 Puppy Way", city: "Nashville", state: "Tennessee", zip: "37207", phone: "(615)-862-8600"},
    { id: 2, name: "Nashville South", address: "400 Dog Park", city: "Nashville", state: "Tennessee", zip: "36892", phone: "(615)-862-8600"}
  ]

  animalsFromAPI = [
    { id: 1, name: "Tiny", breed: "Mastif"},
    { id: 2, name: "Pedro", breed: "Schnauzer"},
    { id: 3, name: "Ivy", breed: "Bulldog"},
    { id: 4, name: "Stinky", breed: "Boxer"}
  ]

  state = {
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI,
    animals: this.animalsFromAPI
  }

  render() {
    return (
      <article className="kennel">
        <LocationList locations={this.state.locations} />
        <EmployeeList employees={this.state.employees} />
        <AnimalList animals={this.state.animals}/>
      </article>
    );
  }
}

export default Kennel