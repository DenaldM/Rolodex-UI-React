import './App.css';
import { Component } from "react";
class App extends Component {
  constructor() {
    super();

    console.log("constructor");
    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    console.log("cmp did mount");
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => { return { monsters: users }; },))
  }

  render() {
    console.log("rendered");
    return (
      <div className="App">
        <input className="search-box" type="search" placeholder="Search" onChange={(event) => {
          const searchString = event.target.value.toLocaleLowerCase();
          const filteredMonsters = this.state.monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchString);
          });

          this.setState(() => {
            return { monsters: filteredMonsters };
          })

        }} />
        {this.state.monsters.map((monster) => {
          console.log(monster.age);
          return (
            <div key={monster.name}>
              <h1>{monster.name}</h1>
            </div>
          )
        })
        }
      </div>
    );
  }
}

export default App;
