import React, { Component } from "react";


export default class NameForm extends Component {
    constructor(props){
        super()
        this.state = {

        }
        this.input = React.createRef();
    }

    handleSubmit(event){
        console.log('handleSubmit',event);
        event.prevuentDefault();
    }

    render(){

        return (
            <div>
                <form onSubmit={this}></form>
            </div>
        )
    }
}