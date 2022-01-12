import React, {Component} from "react";

class App extends Component {

    constructor() {
        super();
        this.state = {
            peopleInSpace: []
        }
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(json => {
            console.log(json);
            this.setState({
                peopleInSpace: json.people
            })
        })
    }

    render() {
        return <div>{this.state.peopleInSpace.map(person => {
            return <p>{person.name}</p>
        })}</div>
    }
}

export default App;