import { Component } from "react";
// import { nanoid } from "nanoid";
import "./App.css";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  handleInput = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              required
              onChange={this.handleInput}
            />
          </label>
          <button>Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <ul className="contactList"></ul>
        </div>
      </>
    );
  }
}

export default App;
