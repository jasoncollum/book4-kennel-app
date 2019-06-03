import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
                        </div>
                    )
                }
            </section>
        )
    }
}
