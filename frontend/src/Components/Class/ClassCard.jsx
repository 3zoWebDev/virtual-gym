import React, { Component } from 'react'

export default class ClassCard extends Component {
    render() {
        console.log("comm")
        console.log(this.props.class)
        return (
            <div>
                <h1>hello component</h1>
                <h2>{this.props.class}</h2>
            </div>
        )
    }
}
