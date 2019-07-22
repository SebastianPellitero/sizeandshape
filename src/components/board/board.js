/*------------------------------------------------*/
/* LIBRARIES
/*------------------------------------------------*/
import React, { Component } from "react";
/*------------------------------------------------*/
/* INTERNAL DEPENDENCIES
/*------------------------------------------------*/
// Styles
import GridWrapper from "./board.style";
// Components
import Canvas from "../canvas/canvas";
import Details from "../details/details";
import Grid from "@material-ui/core/Grid";

class CanvasBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parallelogram: {
        vertices: [],
        area: -1
      },
      circle: {
        radious: -1,
        center: {}
      }
    };
  }

  handleParallelogramChange = (vertices, area) => {
    this.setState({
      parallelogram: {
        vertices,
        area
      }
    });
  };

  handleCircleChange = (center, radius) => {
    this.setState({
      circle: {
        center,
        radius
      }
    });
  };

  render() {
    const { parallelogram, circle } = this.state;
    return (
      <GridWrapper container>
        <Grid item xs={12} lg={9} className="canvas-container">
          <Canvas
            handleParallelogramChange={this.handleParallelogramChange}
            handleCircleChange={this.handleCircleChange}
            parallelogram={parallelogram}
          />
        </Grid>
        <Grid item  xs={12} lg={3} className="canvas-detail-container">
          <Details
            parallelogram={parallelogram}
            circle={circle}
          />
        </Grid>
      </GridWrapper>
    );
  }
}

/*------------------------------------------------*/
/* EXPORTS
/*------------------------------------------------*/
export default CanvasBoard;
