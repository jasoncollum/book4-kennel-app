import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import dog from './DogIcon.svg'
import './Animal.css'

class AnimalList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="animalButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/animals/new")
                        }}>Admit Animal</button>
                </div>
                <section className="animals">
                    <h2>Animals</h2>
                    {
                        this.props.animals.map(animal =>
                            <div key={animal.id} className="card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <img src={dog} className="icon--dog" alt="" />
                                        <h5>{animal.name}</h5>
                                        <p>Owner:</p>
                                        {
                                            this.props.owners.map(owner =>
                                                (owner.petId === animal.id) ? <p key={owner.id}>{owner.name}</p> : ''
                                            )
                                        }
                                        <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                                        <button
                                            onClick={() => this.props.deleteAnimal(animal.id)}
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

export default AnimalList