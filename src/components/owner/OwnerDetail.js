import React, { Component } from 'react'


export default class OwnerDetail extends Component {
    state = {
        deleteBtnDisabled: false
    }

    render() {
        return (
            <section className="owner">
                <div key={this.props.owner.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {this.props.owner.name}
                        </h4>
                        <h6 className="card-title">{this.props.owner.phone}</h6>
                        <button onClick={
                            () => {
                                this.setState(
                                    { deleteBtnDisabled: true },
                                    () => this.props.deleteOwner(this.props.owner.id)
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