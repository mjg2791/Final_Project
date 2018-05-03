import React from "react";

export const Input = props => ( 
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button className="btn btn-primary" onClick={() => this.addTobuy(this.state.value)}>Submit</button>
      </div>
    );
  