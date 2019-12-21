import React, { Component } from 'react';
import { CardList } from './Components/Card-list/CardList';
import { Searchbox } from './Components/Search-box/Searchbox';

class App extends Component {
  state = {
      monsters: [],
      searchText: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  }

  searchUser = (input) => {
      this.setState({searchText: input})
  }

  render() {
    
    const { monsters, searchText} = this.state;
    const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchText.toLowerCase())) 
    
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Searchbox 
          searchText={this.state.searchText} 
          searchUser={this.searchUser}
        />
        <CardList users={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
/*  */