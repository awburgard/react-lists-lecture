import React from 'react';

class App extends React.Component {
  state = {
    newInput: {
      name: '',
      origin: '',
    },
    creaturesList: [
      { name: 'Unicorn', origin: 'European' },
      { name: 'Dragon', origin: 'China' },
      { name: 'Kappa', origin: 'Japan' }
    ],
  };

  // store a new value inputted by the usre on our local state (this.state.newInput)
  storeNewCreature = (event) => {
    const inputValue = event.target.value; // event.target represents the <input> element that the user is interacting with
    const propertyKey = event.target.getAttribute('name');
    console.log('propertyKey', propertyKey);
    console.log('inputValue', inputValue);
    this.setState({
      newInput: {
        // using the 'spread' operator (...) to ensure that all properties from our state object 'newInput' are represented on our object
        ...this.state.newInput,
        [propertyKey]: inputValue,
      }
    });
  }

  // Creates a new array for the state of the 'creaturesList' and clear out the form field input values
  addNewCreature = (event) => {
    const newCreature = { // creating a new creature object with a 'name' and 'origin' key to be added to our new 'creaturesList' array
      name: this.state.newInput.name, // this.state.newInput.name, is the current input value for Creature Name
      origin: this.state.newInput.origin, // this.state.newInput.origin, is the current input value for Creature Origin
    };
    this.setState({
      // We are using the 'spread' operator (...) to put all items from this.state.creaturesList into our new array
      creaturesList: [...this.state.creaturesList, newCreature],
      newInput: {
        name: '',
        origin: '',
      }
    })
  }

  render() {
    const htmlCreatures = this.state.creaturesList.map((indvCreature, i) => {
      return <li key={i}>{indvCreature.name} is from {indvCreature.origin}</li>;
    })
    console.log(htmlCreatures);

    return (
      <div>
        <h1>Creature List</h1>
        <p>
          {JSON.stringify(this.state.creaturesList)}
        </p>
        <input
          type="text"
          name="name"
          placeholder="Creature Name"
          value={this.state.newInput.name}
          onChange={this.storeNewCreature}
        />
        <input
          type="text"
          name="origin"
          placeholder="Origin"
          value={this.state.newInput.origin}
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
