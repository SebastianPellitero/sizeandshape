/*------------------------------------------------*/
/* PUBLIC FUNCTIONS
/*------------------------------------------------*/
/**
 * Draw a circle with arguments passed through parameters.
 * @function drawCircle
 * @param {Object} context - canvas context.
 * @param {Object} location - coordinates to use as center of the circle.
 * @param {String} color - optional - color to fill the circle.
 * @param {number} radius - radius of circle.
 * @param {String} borderColor - optional - line's color for circle.
 * @param {number} lineWidth - optional - line's width for the circle.
 */
const drawCircle = (context, location, color, radius, borderColor, lineWidth) => {
  context.beginPath();
  context.arc(location.x, location.y, radius, 0, 2 * Math.PI, false);
  if (lineWidth) {
    context.lineWidth = lineWidth;
  }
  if (color) {
    context.fillStyle = color;
    context.fill();
  }
  if (borderColor) {
    context.strokeStyle = borderColor;
    context.stroke();
  }
};

export { drawCircle };