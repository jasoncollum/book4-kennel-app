import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'

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
        { id: 1, name: "Ryan Tanay", phone: "615-599-7483", petId: 4 },
        { id: 2, name: "Emma Beaton", phone: "601-924-1179", petId: 1 },
        { id: 3, name: "Dani Adkins", phone: "828-888-9090", petId: 1 },
        { id: 4, name: "Adam Oswalt", phone: "615-579-7281", petId: 3 },
        { id: 5, name: "Fletcher Bangs", phone: "615-245-1234", petId: 2 },
        { id: 6, name: "Angela Lee", phone: "918-123-4567", petId: 3 }
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
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews