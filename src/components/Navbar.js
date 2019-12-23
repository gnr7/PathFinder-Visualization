import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default class CustomNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedObject: "select object",
      selectedMazeAlgorithm: "select maze algorithm",
      selectedPathAlgorithm: "select path algorithm"
    };
  }
  render() {
    return (
      <Navbar bg="dark">
        <Container>
          <Dropdown variant="light">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              {this.state.selectedObject}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {["Start", "Wall", "End"].map(object => {
                return (
                  <Dropdown.Item
                    onClick={() => {
                      this.props.getObject(object.toLowerCase());
                      this.setState({
                        selectedObject: object
                      });
                    }}
                  >
                    {object}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
          {/*  */}
          <Dropdown as={ButtonGroup} variant="light">
            <Button onClick={this.props.generateMaze} variant="light">
              {this.state.selectedMazeAlgorithm}
            </Button>

            <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />

            <Dropdown.Menu>
              {["Randomized Verticals", "Randomized Horizontals"].map(
                mazeAlgorithm => {
                  return (
                    <Dropdown.Item
                      onClick={() => {
                        this.props.getMazeAlgorithm(
                          mazeAlgorithm.replace(/ /g, "")
                        );
                        this.setState({
                          selectedMazeAlgorithm: mazeAlgorithm
                        });
                      }}
                    >
                      {mazeAlgorithm}
                    </Dropdown.Item>
                  );
                }
              )}
            </Dropdown.Menu>
          </Dropdown>
          {/*  */}
          <Dropdown as={ButtonGroup} variant="light">
            <Button onClick={this.props.findPath} variant="light">
              {this.state.selectedPathAlgorithm}
            </Button>

            <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />

            <Dropdown.Menu>
              {["Breadth First Search"].map(pathAlgorithm => {
                return (
                  <Dropdown.Item
                    onClick={() => {
                      this.props.getShortPathAlgorithm(
                        pathAlgorithm.replace(/ /g, "")
                      );
                      this.setState({
                        selectedPathAlgorithm: pathAlgorithm
                      });
                    }}
                  >
                    {pathAlgorithm}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
          <Button
            variant="light"
            onClick={() => {
              this.props.clearSketch();
            }}
          >
            Clear
          </Button>
          <Button variant="light">
            Distance <Badge variant="dark">{this.props.distance}</Badge>
          </Button>
        </Container>
      </Navbar>
    );
  }
}
