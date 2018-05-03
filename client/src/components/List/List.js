import React from "react";
import "./List.css";

export const Input = props =>(
      <div className="tobuyWrapper">
        <button className="removeTobuy" onClick={(e)=> this.removeTobuy(this.props.id) }>remove</button>{this.props.tobuy.text}
      </div>
    );
  