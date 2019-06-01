import React, { Component } from 'react'

class AnimalList extends Component {
    render() {
        return (
            <section className="animals">
                <h2>Animals</h2>
                {
                    this.props.animals.map(animal =>
                        <div key={animal.id}>
                            <h3>{animal.name}</h3>
                            {
                                this.props.owners.map(owner =>
                                    (owner.petId === animal.id) ? <p>{owner.name}</p> : ''
                                )
                            }
                        </div>
                    )
                }
            </section>
        )
    }
}

export default AnimalList