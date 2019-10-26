import React from "react";
import Data from "./Data";

class List extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <ul className="media-list">
          {this.props.list.map(data => {
            return (
              <Data
                title={data.title}
                release_date={data.release_date}
                episode_id={data.episode_id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default List;
