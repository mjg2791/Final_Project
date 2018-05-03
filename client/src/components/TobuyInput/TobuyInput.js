import React from 'react';
import './TobuyInput.css';


export default class TobuyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.tobuyText};

    this.handleChange = this.handleChange.bind(this);
    this.addTobuy = this.addTobuy.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  addTobuy(tobuy) {
   
    if (tobuy.length > 0) {
      this.props.addTobuy(tobuy);
      this.setState({value: ''});
    }
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button className="btn btn-primary" onClick={() => this.addTobuy(this.state.value)}>Submit</button>
      </div>
    );
  }
}