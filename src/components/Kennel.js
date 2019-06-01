import React, { Component } from 'react'
import EmployeeList from './employee/EmployeeList'
import LocationList from './location/LocationList'

export default class Kennel extends Component {
    render() {
        return (
            <div>
                <h3>Student Kennels</h3>
                <LocationList />
                <EmployeeList />
            </div>
        );
    }
}
