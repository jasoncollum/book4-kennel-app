import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EmployeeCard from '../employee/EmployeeCard'

export default class LocationList extends Component {
    render() {
        return (
            <section className="locations">
                <h2>Locations</h2>
                {
                    this.props.locations.map(location =>
                        <div key={location.id}>
                            <h3>{location.name}</h3>
                            <h5>{location.address}</h5>
                            <Link className="nav-link" to={`/${location.id}`}>Details</Link>
                            <h6 class="card-subtitle mb-2 text-muted">Employees:</h6>
                            <div className="employees">
                                {
                                    this.props.employees
                                        .filter(emp => emp.locationId === location.id)
                                        .map(emp => <EmployeeCard key={emp.id} employee={emp} {...this.props} />)
                                }
                            </div>
                        </div>
                    )
                }
            </section>
        )
    }
}
