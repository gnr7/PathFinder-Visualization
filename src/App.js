import React from "react";
import Graph from "./components/GraphSketch";
import Navbar from "./components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      object: "start",
      mazeAlgorithm: "RandomizedVerticals",
      pathAlgorithm: "BreadthFirstSearch",
      distance: 0
    };
    this.getObject = this.getObject.bind(this);
    this.getMazeAlgorithm = this.getMazeAlgorithm.bind(this);
    this.getShortPathAlgorithm = this.getShortPathAlgorithm.bind(this);
    this.clearSketch = this.clearSketch.bind(this);
    this.returnClear = this.returnClear.bind(this);
    this.getDistance = this.getDistance.bind(this);
    this.findPath = this.findPath.bind(this);
    this.returnFindPath = this.returnFindPath.bind(this);
    this.generateMaze = this.generateMaze.bind(this);
    this.returnGenerateMaze = this.returnGenerateMaze.bind(this);
  }

  getObject = object => {
    this.setState({ object: object });
  };
  getMazeAlgorithm = mazeAlgorithm => {
    this.setState({ mazeAlgorithm: mazeAlgorithm });
  };
  getShortPathAlgorithm = pathAlgorithm => {
    this.setState({ pathAlgorithm: pathAlgorithm });
  };

  clearSketch = () => {
    this.setState({ clear: true });
  };
  findPath = () => {
    this.setState({ findPath: true });
  };
  generateMaze = () => {
    console.log("hi");
    this.setState({ generateMaze: true });
  };
  returnClear = () => {
    if (this.state.clear) {
      this.setState({
        clear: false,
        distance: 0
      });
      return true;
    }
    return false;
  };
  returnFindPath = () => {
    // console.log(this.s)
    if (this.state.findPath) {
      this.setState({
        findPath: false
      });
      return true;
    }
    return false;
  };
  returnGenerateMaze = () => {
    if (this.state.generateMaze) {
      console.log("hi2");
      this.setState({
        generateMaze: false
      });
      return true;
    }
    return false;
  };
  getDistance = distance => {
    this.setState({ distance: distance });
  };
  render() {
    return (
      <div>
        <Navbar
          getObject={this.getObject}
          getMazeAlgorithm={this.getMazeAlgorithm}
          getShortPathAlgorithm={this.getShortPathAlgorithm}
          clearSketch={this.clearSketch}
          findPath={this.findPath}
          distance={this.state.distance}
          generateMaze={this.generateMaze}
        />
        <Graph
          className="center"
          object={this.state.object}
          mazeAlgorithm={this.state.mazeAlgorithm}
          pathAlgorithm={this.state.pathAlgorithm}
          returnClear={this.returnClear}
          returnFindPath={this.returnFindPath}
          getDistance={this.getDistance}
          returnGenerateMaze={this.returnGenerateMaze}
        />
      </div>
    );
  }
}
