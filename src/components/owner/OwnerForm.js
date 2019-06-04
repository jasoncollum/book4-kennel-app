import React, { Component } from "react";
import "./Owner.css";

export default class OwnerForm extends Component {
    // Set initial state
    state = {
        ownerName: "",
        ownerPhone: ""
    };

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*
          Local method for validation, creating owner object, and
          invoking the function reference passed from parent component
       */
    constructNewOwner = evt => {
        evt.preventDefault();
        const owner = {
            name: this.state.ownerName,
            phone: this.state.ownerPhone
        };

        // Create the owner and redirect user to owner list
        this.props
            .addOwner(owner)
            .then(() => this.props.history.push("/owners"));
    }


    render() {
        return (
            <React.Fragment>
                <form className="ownerForm">
                    <div className="form-group">
                        <label htmlFor="ownerName">Owner name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="ownerName"
                            placeholder="Owner name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ownerPhone">Owner phone</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="ownerPhone"
                            placeholder="Owner phone number"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="animal">Select Owner's Pet</label>
                        <select
                            defaultValue=""
                            name="animal"
                            id="animalId"
                            onChange={this.handleFieldChange}
                        >
                            <option value="">Select Owner Pet</option>
                            {this.props.animals.map(animal => (
                                <option key={animal.id} id={animal.id} value={animal.id}>
                                    {animal.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="submit"
                        onClick={this.constructNewOwner}
                        className="btn btn-primary"
                    >
                        Submit
          </button>
                </form>
            </React.Fragment>
        );
    }
}