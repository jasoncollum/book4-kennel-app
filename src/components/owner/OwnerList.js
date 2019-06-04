import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Owner.css'

class OwnerList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="ownerButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/owners/new")
                        }}>Add Owner</button>
                </div>
                <section className="owners">
                    <h2>Owners</h2>
                    {
                        this.props.owners.map(owner =>
                            <div key={owner.id} className="card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h5>{owner.name}</h5>
                                        <p>{owner.phone}</p>
                                        <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                                        <button
                                            onClick={() => this.props.deleteOwner(owner.id)}
                                            className="card-link">Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default OwnerList