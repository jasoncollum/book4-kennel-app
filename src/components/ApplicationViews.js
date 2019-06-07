import { Route, Redirect } from 'react-router-dom'
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
import EmployeeForm from './employee/EmployeeForm'
import OwnerManager from '../modules/OwnerManager'
import OwnerList from './owner/OwnerList'
import OwnerDetail from './owner/OwnerDetail'
import OwnerForm from './owner/OwnerForm'
import Login from './authentication/Login'


class ApplicationViews extends Component {

    // Check if credentials are in local storage
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

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

    addEmployee = employee =>
        EmployeeManager.post(employee)
            .then(() => EmployeeManager.getAll())
            .then(employees =>
                this.setState({
                    employees: employees
                }))

    deleteEmployee = (id) => EmployeeManager.removeAndList(id)
        .then(employees => {
            this.props.history.push("/employees")
            this.setState({ employees: employees })
        })

    addOwner = owner =>
        OwnerManager.post(owner)
            .then(() => OwnerManager.getAll())
            .then(owners =>
                this.setState({
                    owners: owners
                }))

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
                <Route path="/login" component={Login} />

                <Route exact path="/" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <LocationList locations={this.state.locations} employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/:locationId(\d+)" render={(props) => {
                    if (this.isAuthenticated()) {
                        // Find the location with the id of the route parameter
                        let location = this.state.locations.find(location =>
                            location.id === parseInt(props.match.params.locationId))

                        // If the location wasn't found, create a default one
                        if (!location) {
                            location = { id: 404, name: "404", address: "Location not found" }
                        }

                        return <LocationDetail location={location} deleteLocation={this.deleteLocation} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route exact path="/animals" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <AnimalList {...props}
                            animals={this.state.animals}
                            owners={this.state.owners}
                            deleteAnimal={this.deleteAnimal} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/animals/new" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <AnimalForm {...props}
                            addAnimal={this.addAnimal}
                            employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    if (this.isAuthenticated()) {
                        // Find the animal with the id of the route parameter
                        let animal = this.state.animals.find(animal =>
                            animal.id === parseInt(props.match.params.animalId))

                        // If the animal wasn't found, create a default one
                        if (!animal) {
                            animal = { id: 404, name: "404", breed: "Dog not found" }
                        }

                        return <AnimalDetail animal={animal} deleteAnimal={this.deleteAnimal} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/animals/:animalId(\d+)/edit" render={props => {
                    return <AnimalEditForm {...props} employees={this.state.employees} updateAnimal={this.updateAnimal} />
                }}
                />

                <Route exact path="/employees" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList {...props}
                            employees={this.state.employees}
                            deleteEmployee={this.deleteEmployee}
                            animals={this.state.animals} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/employees/new" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EmployeeForm {...props}
                            addEmployee={this.addEmployee} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
                    if (this.isAuthenticated()) {
                        // Find the employee with the id of the route parameter
                        let employee = this.state.employees.find(employee =>
                            employee.id === parseInt(props.match.params.employeeId))

                        // If the employee wasn't found, create a default one
                        if (!employee) {
                            employee = { id: 404, name: "Employee not found" }
                        }

                        return <EmployeeDetail employee={employee} deleteEmployee={this.deleteEmployee} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route exact path="/owners" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <OwnerList {...props}
                            owners={this.state.owners}
                            deleteOwner={this.deleteOwner} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/owners/new" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <OwnerForm {...props}
                            addOwner={this.addOwner}
                            animals={this.state.animals} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/owners/:ownerId(\d+)" render={(props) => {
                    if (this.isAuthenticated()) {
                        // Find the owner with the id of the route parameter
                        let owner = this.state.owners.find(owner =>
                            owner.id === parseInt(props.match.params.ownerId))

                        // If the owner wasn't found, create a default one
                        if (!owner) {
                            owner = { id: 404, name: "Owner not found" }
                        }

                        return <OwnerDetail owner={owner} deleteOwner={this.deleteOwner} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)