/*------------------------------------------------*/
/* LIBRARIES
/*------------------------------------------------*/
import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
/*------------------------------------------------*/
/* INTERNAL DEPENDENCIES
/*------------------------------------------------*/
// Styles
import CanvasWrapper from "./canvas.style";
// Constants
import { CANVAS, CUSTOM_DOT } from "../../constants/global";
// Components
import Button from "@material-ui/core/Button";
import {
  drawParallelogram,
  reDrawParallelogram,
  calculateAreaParallelogram,
  drawParallelogramSides,
  getFourthPoint,
  calculateCenterOfParallelogram
} from "../../utils/parallelogram";

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      context: null,
      isMouseDown: false,
      pointSelected: {
        key: 0,
        isFocused: false
      }
    };
  }

  componentDidMount() {
    const canvas = document.getElementById("drawCanvas");
    canvas.addEventListener("click", this.handleCanvasClick);

    this.setState({
      canvas,
      context: canvas.getContext("2d")
    });
  }

  /**
   * Gets the coordinates of the pointer on the canvas.
   * @function getMousePosition
   * @param {Object} event - event's dispatched info.
   * @returns {Object} {x, y} - coordinates of mouse click.
   */
  getMousePosition = event => {
    const { canvas } = this.state;
    // Return the size of canvas and its position relative to the viewport.
    const offset = canvas.getBoundingClientRect();
    // Adjust x and y with the position calculated.
    return {
      x: event.clientX - offset.left,
      y: event.clientY - offset.top
    };
  };

  /**
   * Calculates if the mouse is inside the point through Pythagorean theorem (x^2 + y^2 = r^2)
   * @function isMouseInsidePoint
   * @param {Object} circle - coordinates of considered circle.
   * @param {Object} event - event's dispatched info.
   * @returns {boolean} -- if its inside the given circle.
   */
  isMouseInsidePoint = (circle, event) => {
    let coordinates = this.getMousePosition(event);
    const distanceX = coordinates.x - circle.x;
    const distanceY = coordinates.y - circle.y;
    //return true if x^2 + y^2 <= radius squared.
    return (
      distanceX * distanceX + distanceY * distanceY <=
      CUSTOM_DOT.radius * CUSTOM_DOT.radius
    );
  };

  /**
   * Sets a flag that determinates if the mouse is clicked or loose.
   * @function setDraggable
   * @param {Object} event - event's dispatched info.
   */
  setDraggable = event => {
    const typeEvent = event.type;
    if (typeEvent === "mousedown") {
      this.setState({ isMouseDown: true });
    } else if (typeEvent === "mouseup") {
      this.setState({
        isMouseDown: false,
        pointSelected: {
          isFocused: false
        }
      });
    }
  };

  /**
   * Calculates the center and the radius for the inner circle with the
   * parallelogram area
   * @function calculateCenteredCircleInfo
   * @param {Object} context - canvas context.
   * @param {Array} points - array with points coordinates.
   * @returns {Object} -- center and radius for the circle
   */
  calculateCenteredCircleInfo = (points, area) => {
    // Gets the center of the parallelogram.
    const center = calculateCenterOfParallelogram(points);
    // Calculates radius of the circle using the area of the parallelogram.
    const radius = Math.sqrt(area / Math.PI);
    return {
      center,
      radius
    };
  };

  /**
   * Function that draw a point and the line, if the point is the third
   * it will calculate the complete shape.
   * @function handleCanvasClick
   * @param {Object} event - event's dispatched info.
   */
  handleCanvasClick = event => {
    const { context, canvas } = this.state;
    const {
      handleParallelogramChange,
      handleCircleChange,
      parallelogram
    } = this.props;
    const { vertices } = parallelogram;

    const coordinates = this.getMousePosition(event);
    const location = { x: coordinates.x, y: coordinates.y };

    let parallelogramArea = 0;
    // If the new point is not already on the vertices array or if there are
    // less than 3 points
    if (!_.find(vertices, location) && vertices.length < 3) {
      let newPoints = vertices.concat(location);
      drawParallelogramSides(context, newPoints);
      if (newPoints.length === 3) {
        // Calculates the fourth point.
        const pointFour = getFourthPoint(newPoints);
        newPoints = newPoints.concat(pointFour);
        // Gets the parallelogram area to draw the inner circle with the same area.
        parallelogramArea = calculateAreaParallelogram(newPoints);
        // Calculate inner circle info
        const circle = this.calculateCenteredCircleInfo(
          newPoints,
          parallelogramArea
        );
        // Saves info on parent
        handleCircleChange(circle.center, circle.radius);
        // Finish drawing the parallelogram and the inner circle
        drawParallelogram(context, newPoints, circle);
        //Asign new behavior to the mouse event.
        canvas.addEventListener("mousedown", this.setDraggable);
        canvas.addEventListener("mousemove", this.handleMouseMove);
        canvas.addEventListener("mouseup", this.setDraggable);
        canvas.removeEventListener("click", this.handleCanvasClick);
      }
      // Saves info on parent
      handleParallelogramChange(newPoints, parallelogramArea);
    }
  };

  /**
   * Function that search if any point is clicked and if one is clicked
   * it will update and recalculate the shape.
   * @function handleMouseMove
   * @param {Object} event - event's dispatched info
   */
  handleMouseMove = event => {
    const { isMouseDown, pointSelected, context } = this.state;
    const { parallelogram } = this.props;
    const { vertices } = parallelogram;
    if (isMouseDown && vertices.length === 4) {
      if (pointSelected.isFocused) {
        // If one point is selected it update and recalculate and redraw the parallelogram.
        const coordinates = this.getMousePosition(event);
        const newPoints = _.cloneDeep(vertices);
        const { handleParallelogramChange, handleCircleChange } = this.props;

        newPoints[pointSelected.key].x = coordinates.x;
        newPoints[pointSelected.key].y = coordinates.y;
        // Recalculates and updates fourth point
        const pointFour = getFourthPoint(newPoints);
        newPoints[3] = pointFour;
        // Recalculates areas and circle info
        const parallelogramArea = calculateAreaParallelogram(vertices);
        const circle = this.calculateCenteredCircleInfo(
          newPoints,
          parallelogramArea
        );
        // Updates info on parent
        handleCircleChange(circle.center, circle.radius);
        handleParallelogramChange(newPoints, parallelogramArea);
        // Re draw parallelogram
        reDrawParallelogram(context, newPoints, circle);
      } else {
        //Check if the mouse is in one of the points and select the clicked point.
        this.searchClickedPoint(vertices, event);
      }
    }
  };

  /**
   * Loop in each points and select the one that the mouse is pointing.
   * @function searchClickedPoint
   * @param {Array} parallelogram - array of coordinates
   * @param {Object} event - event's dispatched info
   */
  searchClickedPoint = (vertices, event) => {
    for (let i = 0; i < vertices.length; i++) {
      if (this.isMouseInsidePoint(vertices[i], event)) {
        this.setState({
          pointSelected: {
            isFocused: true,
            key: i
          }
        });
        break;
      }
    }
  };

  /**
   * Function that reset the canvas and restarts points and area.
   * @function handleClear
   */
  handleClear = () => {
    const { context, canvas } = this.state;
    const { handleParallelogramChange } = this.props;

    context.clearRect(0, 0, CANVAS.width, CANVAS.height);
    canvas.addEventListener("click", this.handleCanvasClick);
    canvas.removeEventListener("mousedown", this.setDraggable);
    canvas.removeEventListener("mousemove", this.handleMouseMove);
    canvas.removeEventListener("mouseup", this.setDraggable);
    handleParallelogramChange([], 0);
  };

  render() {
    return (
      <CanvasWrapper>
        <Button onClick={this.handleClear}>Clear</Button>
        <canvas
          className="canvas"
          id="drawCanvas"
          width={CANVAS.width}
          height={CANVAS.height}
        />
      </CanvasWrapper>
    );
  }
}

/*------------------------------------------------*/
/* PROP TYPES
/*------------------------------------------------*/
Canvas.propTypes = {
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
  }),
  handleParallelogramChange: PropTypes.func.isRequired,
  handleCircleChange: PropTypes.func.isRequired
};

Canvas.defaultProps = {
  parallelogram: {},
  circle: {}
};

/*------------------------------------------------*/
/* EXPORTS
/*------------------------------------------------*/
export default Canvas;
