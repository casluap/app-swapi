import React from "react";
import List from "./List";

class Films extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentWillMount() {
    fetch("https://swapi.co/api/films/")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ data: data.results });
      });
  }

  render() {
    console.log(this.state.data.results);
    if (this.state.data.length > 0) {
      console.log(this.state.data);
      return (
        <div className="container-fluid">
          <List list={this.state.data} />
        </div>
      );
    } else {
      return <p className="text-center">Data Loading</p>;
    }
  }
}

export default Films;
