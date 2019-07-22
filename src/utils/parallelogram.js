/*------------------------------------------------*/
/* INTERNAL DEPENDENCIES
/*------------------------------------------------*/
import { drawCircle } from "./circle";
// Constants
import {
  CANVAS,
  CUSTOM_DOT,
  PARALELLOGRAM,
  INNER_CIRCLE
} from "../constants/global";

/*------------------------------------------------*/
/* PRIVATE FUNCTIONS
/*------------------------------------------------*/
/**
 * Calculates the distance between 2 points using the distance formula that
 * is derived from the Pythagorean theorem.
 * @function distanceBetweenTwoPoints
 * @param {Object} pointA - coordinates of point A
 * @param {Object} pointB - coordinates of point B
 * @returns {number} distance between pointA and pointB in pixels
 */
const distanceBetweenTwoPoints = (pointA, pointB) => {
  const a = pointA.x - pointB.x;
  const b = pointA.y - pointB.y;

  return Math.sqrt(a * a + b * b);
};

/**
 * Draw a line between two points creating a side of the parallelogram.
 * @function drawLine
 * @param {Object} context - canvas context.
 * @param {Object} previous - coordinates of the previous point.
 * @param {Object} destination - coordinates of the destination point.
 */
const drawLine = (ctx, previous, destination) => {
  ctx.beginPath();
  ctx.moveTo(previous.x, previous.y);
  ctx.lineTo(destination.x, destination.y);
  ctx.lineWidth = 2;
  ctx.strokeStyle = PARALELLOGRAM.color;
  ctx.stroke();
};

/*------------------------------------------------*/
/* PUBLIC FUNCTIONS
/*------------------------------------------------*/

/**
 * Calculates the coordinates of the center of the parallelogram.
 * @function calculateCenterOfParallelogram
 * @param {Array} points - array with points coordinates.
 * @returns {number} - coordinates of the center point of the parallelogram.
 */
const calculateCenterOfParallelogram = points => {
  const [pointOne, pointTwo, pointThree, pointFour] = points;

  const center_x = (pointOne.x + pointTwo.x + pointThree.x + pointFour.x) / 4;
  const center_y = (pointOne.y + pointTwo.y + pointThree.y + pointFour.y) / 4;
  return { x: center_x, y: center_y };
};

/**
 * Calculates the area of the parallelogram dividing the parallelogram in
 * two triangles and using the formula of Heron that
 * finds the area of a triangle of which all its sides are known.
 * @function calculateAreaParallelogram
 * @param {Array} points - array with points coordinates.
 * @returns {number} distance between pointA and pointB in pixels.
 */
const calculateAreaParallelogram = points => {
  // Only calculates area when there are 4 points.
  if (!points || points.length < 4) {
    return 0;
  }
  // Get diagonal lenght
  const sideA = distanceBetweenTwoPoints(points[1], points[3]);
  // Get lenght of p4-p1 vector
  const sideB = distanceBetweenTwoPoints(points[3], points[0]);
  // Get lenght of p2-p1 vector
  const sideC = distanceBetweenTwoPoints(points[1], points[0]);
  //Calculate semiperimeter of the triangle
  const semiperimeter = (sideA + sideB + sideC) / 2;
  // With the three sides of the triangle, use Heron's formule to calculate area.
  // square root(SP(SP-A)(SP-B)(SP-C)).
  return (
    Math.sqrt(
      semiperimeter *
        (semiperimeter - sideA) *
        (semiperimeter - sideB) *
        (semiperimeter - sideC)
    ) * 2
  );
};

/**
 * Calculates the coordinates of the fourth point of the parallelogram
 * using the three points selected by the user.
 * @function getFourthPoint
 * @param {Array} points - array with points coordinates.
 * @returns {number} - coordinates of the fourth point of the parallelogram.
 */
const getFourthPoint = points => {
  const [pointOne, pointTwo, pointThree] = points;
  const x4 = pointOne.x - (pointTwo.x - pointThree.x);
  const y4 = pointThree.y - (pointTwo.y - pointOne.y);
  return { x: x4, y: y4 };
};

/**
 * Draw the first three parallelogram sides.
 * @function drawParallelogramSides
 * @param {Object} context - canvas context.
 * @param {Array} points - array with points coordinates.
 */
const drawParallelogramSides = (context, points) => {
  // Gets the last point added to the array.
  const lastPoint = points[points.length - 1];
  // Draw a red circle using this point as center.
  const { color, radius, borderColor } = CUSTOM_DOT;
  drawCircle(context, lastPoint, color, radius, borderColor);
  // If there are more than one point, it will draw a line between the last 2 added.
  if (points.length - 1 > 0) {
    const previousPoint = points[points.length - 2];
    drawLine(context, previousPoint, lastPoint);
  }
};

/**
 * Draw the final point for the parallelogram and the inner yellow circle.
 * @function drawParallelogram
 * @param {Object} context - canvas context.
 * @param {Array} points - array with points coordinates.
 * @param {Object} circle - inner circle's info.
 * @param {Object} circle.center - object with the coordinates of the circle's center.
 * @param {number} circle.radius - circle's radius.
 */
const drawParallelogram = (context, points, circle) => {
  const [pointOne, , pointThree, pointFour] = points;
  // Draw the closing lines.
  drawLine(context, pointThree, pointFour);
  drawLine(context, pointOne, pointFour);
  // Draw a centered circle with the same area of the parallelogram.
  const { color, borderColor, lineWidth } = INNER_CIRCLE;
  const { center, radius } = circle;
  drawCircle(context, center, color, radius, borderColor, lineWidth);
}

/**
 * Re-Draw the parallelogram and the inner yellow circle.
 * @function reDrawParallelogram
 * @param {Object} context - canvas context.
 * @param {Array} points - array with points coordinates.
 * @param {Object} circle - inner circle's info.
 * @param {Object} circle.center - object with the coordinates of the circle's center.
 * @param {number} circle.radius - circle's radius.
 */
const reDrawParallelogram = (context, points, circle) => {
  // Clear canvas.
  context.clearRect(0, 0, CANVAS.width, CANVAS.height);
  for (let i = 0; i < 3; i++) {
    // Adds each point to a new array and reuses drawParallelogramSides
    // to draw the parallelogram.
    const newPoints = points.slice(0, i + 1);
    drawParallelogramSides(context, newPoints);
  }
  // Draw the final point for the parallelogram and the inner yellow circle.
  drawParallelogram(context, points, circle);
};

export {
  drawParallelogram,
  reDrawParallelogram,
  drawParallelogramSides,
  calculateAreaParallelogram,
  calculateCenterOfParallelogram,
  getFourthPoint
};
