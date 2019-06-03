import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import AnimalManager from '../modules/AnimalManager'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import LocationManager from '../modules/LocationManager'
import LocationList from './location/LocationList'
import LocationDetail from './location/LocationDetail'
import EmployeeManager from '../modules/EmployeeManager'
import EmployeeList from './employee/EmployeeList'
import EmployeeDetail from './employee/EmployeeDetail'
import OwnerManager from '../modules/OwnerManager'
import OwnerList from './owner/OwnerList'
import OwnerDetail from './owner/OwnerDetail'


class ApplicationViews extends Component {
    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: []
    }

    addAnimal = animal =>
        AnimalManager.post(animal)
            .then(() => AnimalManager.getAll())
            .then(animals =>
                this.setState({
                    animals: animals
                }))

    deleteAnimal = (id) => AnimalManager.removeAndList(id)
        .then(animals => {
            this.props.history.push("/animals")
            this.setState({ animals: animals })
        })

    deleteEmployee = (id) => EmployeeManager.removeAndList(id)
        .then(employees => {
            this.props.history.push("/employees")
            this.setState({ employees: employees })
        })

    deleteOwner = (id) => OwnerManager.removeAndList(id)
        .then(owners => {
            this.props.history.push("/owners")
            this.setState({ owners: owners })
        })

    deleteLocation = (id) => LocationManager.removeAndList(id)
        .then(locations => {
            this.props.history.push("/")
            this.setState({ locations: locations })
        })

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
                <Route exact path="/:locationId(\d+)" render={(props) => {
                    // Find the location with the id of the route parameter
                    let location = this.state.locations.find(location =>
                        location.id === parseInt(props.match.params.locationId))

                    // If the location wasn't found, create a default one
                    if (!location) {
                        location = { id: 404, name: "404", address: "Location not found" }
                    }

                    return <LocationDetail location={location} deleteLocation={this.deleteLocation} />
                }} />

                <Route exact path="/animals" render={(props) => {
                    return <AnimalList {...props}
                        animals={this.state.animals}
                        owners={this.state.owners}
                        deleteAnimal={this.deleteAnimal} />
                }} />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                        addAnimal={this.addAnimal}
                        employees={this.state.employees} />
                }} />
                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    // Find the animal with the id of the route parameter
                    let animal = this.state.animals.find(animal =>
                        animal.id === parseInt(props.match.params.animalId))

                    // If the animal wasn't found, create a default one
                    if (!animal) {
                        animal = { id: 404, name: "404", breed: "Dog not found" }
                    }

                    return <AnimalDetail animal={animal} deleteAnimal={this.deleteAnimal} />
                }} />

                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees}
                        deleteEmployee={this.deleteEmployee} />
                }} />
                <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
                    // Find the employee with the id of the route parameter
                    let employee = this.state.employees.find(employee =>
                        employee.id === parseInt(props.match.params.employeeId))

                    // If the employee wasn't found, create a default one
                    if (!employee) {
                        employee = { id: 404, name: "Employee not found" }
                    }

                    return <EmployeeDetail employee={employee} deleteEmployee={this.deleteEmployee} />
                }} />

                <Route exact path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} deleteOwner={this.deleteOwner} />
                }} />
                <Route exact path="/owners/:ownerId(\d+)" render={(props) => {
                    // Find the owner with the id of the route parameter
                    let owner = this.state.owners.find(owner =>
                        owner.id === parseInt(props.match.params.ownerId))

                    // If the owner wasn't found, create a default one
                    if (!owner) {
                        owner = { id: 404, name: "Owner not found" }
                    }

                    return <OwnerDetail owner={owner} deleteOwner={this.deleteOwner} />
                }} />
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)