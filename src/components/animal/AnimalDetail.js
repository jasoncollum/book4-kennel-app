import React, { Component } from 'react'
import './AnimalDetail.css'
import dog from './DogIcon.svg'

export default class AnimalDetail extends Component {
    state = {
        deleteBtnDisabled: false
    }

    render() {
        return (
            <section className="animal">
                <div key={this.props.animal.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={dog} className="icon--dog" alt="" />
                            {this.props.animal.name}
                        </h4>
                        <h6 className="card-title">{this.props.animal.breed}</h6>
                        <button onClick={
                            () => {
                                this.setState(
                                    { deleteBtnDisabled: true },
                                    () => this.props.deleteAnimal(this.props.animal.id)
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
