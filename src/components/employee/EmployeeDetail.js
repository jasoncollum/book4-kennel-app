import React, { Component } from 'react'

export default class EmployeeDetail extends Component {
    state = {
        deleteBtnDisabled: false
    }

    render() {
        return (
            <section className="employee">
                <div key={this.props.employee.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {this.props.employee.name}
                        </h4>
                        <button onClick={
                            () => {
                                this.setState(
                                    { deleteBtnDisabled: true },
                                    () => this.props.deleteEmployee(this.props.employee.id)
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