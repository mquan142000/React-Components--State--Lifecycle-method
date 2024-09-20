import React, { Component } from 'react';
import './App.css'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: ''
    };
  }

  handleChange = (event) => {
    this.setState({ item: event.target.value });
  }

  handleAddItem = () => {
    const { item, list } = this.state;
    if (item) {
      this.setState({
        list: [...list, item],
        item: '' 
      });
    }
  }

  render() {
    const { list, item } = this.state;
    return (
      <div className="App">
        <h1>Todo List</h1>
        <div>
          <input
            type="text"
            value={item}
            onChange={this.handleChange}
            placeholder="Enter a new todo"
          />
          <button onClick={this.handleAddItem}>Add</button>
        </div>
        <ul>
          {list.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
