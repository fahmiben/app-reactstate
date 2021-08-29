import React, { Component } from 'react'

class Person extends Component {

    constructor(props) {
        console.log("constructor()");
        super(props)
        this.state = {
        intervall: null,
        timer: 0
    };
    }
    componentDidMount() {
        console.log("componentDidMount()");
        this.setState({
            intervall: setInterval(() => {
                this.setState({ timer: this.state.timer + 1 });
            }, 1000),
        });
    }

    componentDidUpdate(){
        console.log("componentDidUpdate()");
    }

    state = {
        isvisible: false
     }
    todos = [
        'Introduction to React State',
        'Class based component',
        'Functional component'
    ]
    
    togglevisibility = () => {
        this.setState({
        isvisible : !this.state.isvisible
        })
    }
    
    render() {
        console.log("render()");
        return (

           
                 
            <div>
            
                 <ul className="Person">
                        {this.todos.map((todo, i) => (
                            <li key={i} >{todo}</li>
                        ))}
                    </ul> 
                
                    <h2>{this.state.timer}</h2>
            </div>
        )
    }
}

export default Person
