/*------------------------------------------------*/
/* LIBRARIES
/*------------------------------------------------*/
import React, { Component } from "react";
import PropTypes from "prop-types";
/*------------------------------------------------*/
/* INTERNAL DEPENDENCIES
/*------------------------------------------------*/
// Styles
import DetailsWrapper from "./details.style";
// Components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography"; 

class Details extends Component {
  /**
   * Returns the markup for every vertice to display on details section
   * @function showPoints
   * @param {Object} parallelogram - object with the vertices of the parallelogram
   */
  showPoints = parallelogram => {
    if (parallelogram) {
      return parallelogram.vertices.map((point, index) => (
        <Grid item xs={12} key={index}>
          <Typography gutterBottom variant="h6">
            Point Number {index + 1}
          </Typography>
          <p>{"{"} X: {Math.trunc(point.x)}, Y: {Math.trunc(point.y)}{"}"}</p>
        </Grid>
      ));
    }
  };

  render() {
    const { parallelogram, circle } = this.props;
    if (parallelogram.vertices.length < 1) {
      return (
        <DetailsWrapper>
          <Grid container>
            <p>Add some items to see it's info</p>
          </Grid>
        </DetailsWrapper>
      );
    }
    const { center, radius } = circle;
    const parallelogramArea = Math.trunc(parallelogram.area);
    const circleArea = radius ? Math.trunc(radius * radius * Math.PI) : 0;
    return (
      <DetailsWrapper>
        <Grid container>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h4">
              Parallelogram
            </Typography>
          </Grid>
          {this.showPoints(parallelogram)}
          {parallelogram.vertices.length === 4 && (
            <>
              <Grid item xs={12}>
                <Typography gutterBottom variant="h6">
                  Total Area: {parallelogramArea}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="h4" className="circle-title">
                  Circle
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="h6">
                  Center Point
                </Typography>
                <p>{"{"} X: {Math.trunc(center.x)}, Y: {Math.trunc(center.y)}{"}"}</p>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="h6">
                  Radius: {Math.trunc(radius)}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="h6">
                  Total Area: {circleArea}
                </Typography>
              </Grid>
            </>
          )}
        </Grid>
      </DetailsWrapper>
    );
  }
}

/*------------------------------------------------*/
/* PROP TYPES
/*------------------------------------------------*/
Details.propTypes = {
  parallelogram: PropTypes.shape({
    vertices: PropTypes.arrayOf(
      PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number
      })
    ),
    area: PropTypes.number
  }),
  circle: PropTypes.shape({
    radious: PropTypes.number,
    center: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    })
  })
};

Details.defaultProps = {
  parallelogram: {},
  circle: {}
};

/*------------------------------------------------*/
/* EXPORTS
/*------------------------------------------------*/
export default Details;
