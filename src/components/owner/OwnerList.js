import React, { Component } from 'react'
import './Owner.css'

class OwnerList extends Component {
    render() {
        return (
            <section className="owners">
                <h2>Owners</h2>
                {
                    this.props.owners.map(owner =>
                        <div key={owner.id} className="card">
                            <div className="card-body">
                                <div className="card-title">
                                    <h5>{owner.name}</h5>
                                    <p>{owner.phone}</p>
                                    <button
                                        onClick={() => this.props.deleteOwner(owner.id)}
                                        className="card-link">Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </section>
        )
    }
}

export default OwnerList