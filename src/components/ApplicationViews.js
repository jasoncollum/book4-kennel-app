import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import AnimalManager from '../modules/AnimalManager'
import AnimalList from './animal/AnimalList'
import LocationManager from '../modules/LocationManager'
import LocationList from './location/LocationList'
import EmployeeManager from '../modules/EmployeeManager'
import EmployeeList from './employee/EmployeeList'
import OwnerManager from '../modules/OwnerManager'
import OwnerList from './owner/OwnerList'

const remoteURL = "http://localhost:5002"


class ApplicationViews extends Component {
    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: []
    }

    deleteAnimal = id => {
        return fetch(`${remoteURL}/animals/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`${remoteURL}/animals`))
            .then(animals => animals.json())
            .then(animals => this.setState({
                animals: animals
            })
            )
    }

    deleteEmployee = id => {
        return fetch(`${remoteURL}/employees/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`${remoteURL}/employees`))
            .then(employees => employees.json())
            .then(employees => this.setState({
                employees: employees
            })
            )
    }

    deleteOwner = id => {
        return fetch(`${remoteURL}/owners/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`${remoteURL}/owners`))
            .then(owners => owners.json())
            .then(owners => this.setState({
                owners: owners
            })
            )
    }

    componentDidMount() {
        const newState = {}

        AnimalManager.getAll().then(allAnimals => {
            newState.animals = allAnimals
        })
            .then(() => EmployeeManager.getAll()
                .then(allEmployees => {
                    newState.employees = allEmployees
                }))
            .then(() => LocationManager.getAll()
                .then(allLocations => {
                    newState.locations = allLocations
                }))
            .then(() => OwnerManager.getAll()
                .then(allOwners => {
                    newState.owners = allOwners
                }))
            .then(() => this.setState(newState))
    }


    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} owners={this.state.owners} deleteAnimal={this.deleteAnimal} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees}
                        deleteEmployee={this.deleteEmployee} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} deleteOwner={this.deleteOwner} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews