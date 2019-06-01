import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'

const remoteURL = "http://localhost:5002";

class ApplicationViews extends Component {
    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: []
    }

    componentDidMount() {
        const newState = {}

        fetch(`${remoteURL}/animals`)
            .then(r => r.json())
            .then(animals => newState.animals = animals)
            .then(() => fetch(`${remoteURL}/employees`)
                .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch(`${remoteURL}/locations`)
                .then(r => r.json()))
            .then(locations => newState.locations = locations)
            .then(() => fetch(`${remoteURL}/owners`)
                .then(r => r.json()))
            .then(owners => newState.owners = owners)
            .then(() => this.setState(newState))
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