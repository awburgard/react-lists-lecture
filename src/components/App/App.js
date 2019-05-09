import React from 'react';

class App extends React.Component {
  state = {
    creaturesList: ['Unicorn', 'Dragon', 'Kappa'],
  };

  render() {
    // const htmlCreatures = [];
    // for (let i = 0; i < this.state.creaturesList.length; i++) {
    //   const indvCreature = this.state.creaturesList[i]
    //   htmlCreatures.push(<li key={i}>{indvCreature}</li>);
    // }
    const htmlCreatures = this.state.creaturesList.map((indvCreature, i) => {
      return <li key={i}>{indvCreature}</li>;
    })
    console.log(htmlCreatures);

    return (
      <div>
        <h1>Creature List</h1>
        <p>
          {JSON.stringify(this.state.creaturesList)}
        </p>
        <ul>
          { htmlCreatures }
        </ul>
      </div>
    );
  }

}

export default App;
