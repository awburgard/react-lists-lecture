import React from 'react';

class App extends React.Component {
  state = {
    newInput: {
      name: '',
    },
    creaturesList: [ 'Unicorn', 'Dragon', 'Kappa' ],
  };

  storeNewCreatureName = (event) => {
    const inputValue = event.target.value;
    console.log('inputValue', inputValue);
    this.setState({
      newInput: {
        name: inputValue,
      }
    });
  }

  addNewCreature = (event) => {
    const newCreature = {
      name: this.state.newInput.name,
      origin: this.state.newInput.origin,
    };
    this.setState({
      creaturesList: [...this.state.creaturesList, newCreature],
      newInput: {
        name: '',
        origin: '',
      }
    })
  }

  render() {
    // const htmlCreatures = [];
    // for (let i = 0; i < this.state.creaturesList.length; i++) {
    //   const indvCreature = this.state.creaturesList[i]
    //   htmlCreatures.push(<li key={i}>{indvCreature}</li>);
    // }
    const htmlCreatures = this.state.creaturesList.map((indvCreature, i) => {
      return <li key={i}>{indvCreature}</li>;
    });
    console.log(htmlCreatures);

    return (
      <div>
        <h1>Creature List</h1>
        <p>
          {JSON.stringify(this.state.creaturesList)}
        </p>
        <input
          type="text"
          name="creatureName"
          placeholder="Creature Name"
          value={this.state.newInput.name}
          onChange={this.storeNewCreature}
        />
        <button onClick={this.addNewCreature}>Add New Creature</button>
        <ul>
          { htmlCreatures }
        </ul>
      </div>
    );
  }

}

export default App;
