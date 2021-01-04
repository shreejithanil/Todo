import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        return (
            <div className="column">
                <h1>Todo Input</h1>
                <div className="input-group mb-3">
                    <form>
                         <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                       <input class="btn btn-outline-secondary" type="submit" id="button-addon2"></input>
                    </form>
                        
                </div>
            </div>
        )
    }
}
