import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props){
    super(props);
    console.log("constructor");
  }
  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({
      count: current.count+1
    }));
  };

  minus = () => {
    this.setState(current => ({
      count: current.count-1
    }));
  };

  componentDidMount(){
    console.log("component rendered");
  }

  componentDidUpdate(){
    console.log("just updated");
  }

  render(){
    console.log("rendering");
    return (
      <div>
        <h1>승연아 {this.state.count}</h1>
        <button onClick={this.add} >add</button>
        <button onClick={this.minus} >minus</button>
      </div>
    );
  }
}

export default App;
