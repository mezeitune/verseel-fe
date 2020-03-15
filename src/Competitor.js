import React, { Component } from 'react';
import './Competitor.css';

class Competitor extends Component {

    constructor(props) {
        super(props);
        this.removeGreeting = this.removeGreeting.bind(this);
    }

    render() {
        return (
          <div className="Competitor">
            {this.props.name} &nbsp;
            <button onClick={this.removeGreeting}>Remove Me!</button>
          </div>
        );
      }

    removeGreeting() {
        this.props.removeGreeting(this.props.name);
      }

  }

export default Competitor;