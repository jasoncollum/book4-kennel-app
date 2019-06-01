import React, { Component } from 'react'
import EmployeeList from './employee/EmployeeList'
import LocationList from './location/LocationList'
import AnimalList from './animal/AnimalList'
import './Kennel.css'

class Kennel extends Component {



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