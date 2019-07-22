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

const showPoints = parallelogram => {
  if (parallelogram) {
    return parallelogram.vertices.map((point, index) => (
      <Grid item xs={12} key={index}>
        <Typography gutterBottom variant="h6">
          Point Number {index + 1}
        </Typography>
        <p>{"{"} X: {point.x}, Y: {point.y}{"}"}</p>
      </Grid>
    ));
  }
};

class Details extends Component {
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
          {showPoints(parallelogram)}
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
