/*------------------------------------------------*/
/* LIBRARIES
/*------------------------------------------------*/
import styled from "styled-components";
// Constant
import { THEME_KEYS } from "../../constants/theme";

const CanvasWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    position: absolute;
    top: 105px;
    right: 40px;
    background: ${THEME_KEYS.lavender};
    &:hover {
      color: ${THEME_KEYS.lavender};
    }
  }
  canvas {
    margin-top: 20px;
    border: 1px solid ${THEME_KEYS.grey};
    background-color: ${THEME_KEYS.white};
  }
`;

export default CanvasWrapper;
