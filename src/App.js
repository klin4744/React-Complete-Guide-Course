import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "adqw", name: "Max", age: 28 },
      { id: "arwerew", name: "Manu", age: 29 },
      { id: "fwfewt", name: "Stephanie", age: 26 }
    ],
    showPersons: false
  };
  deletePersonHandler = index => {
    let newList = [...this.state.persons];
    newList.splice(index, 1);
    this.setState({
      persons: newList
    });
  };
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      person => person.id === id
    );
    // If findIndex loops through an array and returns the index of an element that matches the callback function passed into it, here if we get a match for id, we return that index
    const person = {
      ...this.state.persons[personIndex]
    };
    // Copy the person object
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1, person);
    // persons[personIndex] = person;
    this.setState({
      persons
    });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };
  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid black",
      padding: "8px",
      cursor: "pointer"
    };
    let persons = null;
    if (this.state.showPersons) {
      style.backgroundColor = "red";
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={event => this.nameChangedHandler(event, person.id)}
            />
          ))}
        </div>
      );
    }
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes = ["red"]
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes = ["red","bold"]
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is a paragraph</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Names
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
