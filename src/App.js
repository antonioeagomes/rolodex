import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then(response => response.json())
      .then(users => this.setState({ characters: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { characters, searchField } = this.state;
    const filteredChars = characters.filter(c =>
      c.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <h1>Robots Rolodex</h1>
        <SearchBox placeholder="Search user" handleChange={this.handleChange} />
        <CardList characters={filteredChars} />
      </div>
    );
  }
}

export default App;
