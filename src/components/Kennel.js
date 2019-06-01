import React, { Component } from 'react'
import EmployeeList from './employee/EmployeeList'
import LocationList from './location/LocationList'
import AnimalList from './animal/AnimalList'
import './Kennel.css'

class Kennel extends Component {

    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Puppy Way" },
        { id: 2, name: "Nashville South", address: "500 Dogbreath Pike" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Sydney" },
        { id: 2, name: "Bertie" },
        { id: 3, name: "Charlie" },
        { id: 4, name: "Banjo" }
    ]

    ownersFromAPI = [
        { id: 1, name: "Ryan Tanay", petId: 4 },
        { id: 2, name: "Emma Beaton", petId: 1 },
        { id: 3, name: "Dani Adkins", petId: 1 },
        { id: 4, name: "Adam Oswalt", petId: 3 },
        { id: 5, name: "Fletcher Bangs", petId: 2 },
        { id: 6, name: "Angela Lee", petId: 3 }
    ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        owners: this.ownersFromAPI
    }

    render() {
        return (
            <article className="kennel">
                <h3>Student Kennels</h3>
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                <AnimalList animals={this.state.animals} owners={this.state.owners} />
            </article>
        );
    }
}

export default Kennel