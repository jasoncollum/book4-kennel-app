import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'

class ApplicationViews extends Component {
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
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} owners={this.state.owners} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews