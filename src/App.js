import React, { Component } from 'react'
import List from "./list"
import Input from "./input"
import  uuid from "uuid"

export default class App extends Component {
    render() {
        return (
            <div className="container" >
                <div className="row">
                <Input />
                <List />

                </div>
              
            </div>
        )
    }
}
