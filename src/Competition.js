import React, { Component } from 'react';
import './Competition.css';

class Competition extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="Competition">
            {this.props.name}
          </div>
        );
      }

  }

export default Competition;