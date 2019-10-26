import React from "react";
import "../css/Data.css";

class Data extends React.Component {
  render() {
    return (
      <div className="media">
        <h3>
          Title: <br></br> {this.props.title}
        </h3>
        <p>Release Date: {this.props.release_date}</p>
        <p>Episode ID:{this.props.episode_id}</p>
      </div>
    );
  }
}

export default Data;
