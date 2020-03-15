import React, { Component } from 'react';
import './NewCompetition.css';
import Competitor from './Competitor';
import AddGreeter from './AddGreeter';

class NewCompetition extends Component {

    constructor(props) {
        super(props);
        this.addGreeting = this.addGreeting.bind(this);
        this.removeGreeting = this.removeGreeting.bind(this);
        this.state = { greetings: [] };
      }


      render() {
        return (
          <div className="NewCompetition">
            <AddGreeter addGreeting={this.addGreeting}/>
            {this.renderGreetings()}
            <button>Start</button>
          </div>
        );
      }

      renderGreetings() {
        return this.state.greetings.map(name => (
          <Competitor
            key={name}
            name={name}
            removeGreeting={this.removeGreeting}
          />
        ));
      }

    addGreeting(newName) {
        this.setState({ greetings: [...this.state.greetings, newName] });
    }

    removeGreeting(removeName) {
        const filteredGreetings = this.state.greetings.filter(name => {
          return name !== removeName;
        });
        this.setState({ greetings: filteredGreetings });
      }
  }
  export default NewCompetition;