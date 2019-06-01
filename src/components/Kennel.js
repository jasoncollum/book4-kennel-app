import React, { Component } from 'react'
import EmployeeList from './employee/EmployeeList'
import LocationList from './location/LocationList'
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

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI
    }

    render() {
        return (
            <article className="kennel">
                <h3>Student Kennels</h3>
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
            </article>
        );
    }
}

export default Kennel