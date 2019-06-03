import React, { Component } from 'react'
import './LocationDetail.css'

export default class LocationDetail extends Component {
    state = {
        deleteBtnDisabled: false
    }

    render() {
        return (
            <section className="location">
                <div key={this.props.location.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {this.props.location.name}
                        </h4>
                        <h6 className="card-title">{this.props.location.address}</h6>
                        <p className="card-title">{this.props.location.hours}</p>
                        <button onClick={
                            () => {
                                this.setState(
                                    { deleteBtnDisabled: true },
                                    () => this.props.deleteLocation(this.props.location.id)
                                )
                            }
                        }
                            disabled={this.state.deleteBtnDisabled}
                            className="card-link">Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}
