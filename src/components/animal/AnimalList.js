import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AnimalCard from './AnimalCard'
// import dog from './DogIcon.svg'
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
                            <AnimalCard key={animal.id} animal={animal} {...this.props} />
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default AnimalList