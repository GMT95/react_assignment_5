import React, { Component } from 'react';
import '../App.js';

class Proctoring extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {proctoringSubmit,proctoringKey} = this.props;
    return (
      <div style={{marginLeft: 'auto',marginRight: 'auto', width: '20%',marginTop: 100}}>
        <h3>Enter Key to Proceed</h3>
        <form onSubmit={proctoringSubmit}>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="54321" onChange={proctoringKey} />
          </div>
          <button type="submit" class="btn btn-primary">Start</button>
        </form>
      </div>
    );
  }
}

export default Proctoring;