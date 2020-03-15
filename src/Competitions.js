import React, { Component } from 'react';
import './NewCompetition';
import Competition from './Competition';

class Competitions extends Component {

    constructor(props) {
        super(props);
        this.state = { greetings: ['hola'] };
      }


      render() {
        return (
          <div className="NewCompetition">
            {this.renderGreetings()}
          </div>
        );
      }

      renderGreetings() {
        return this.state.greetings.map(name => (
          <Competition
            name={name}
          />
        ));
      }


  }
  export default Competitions;