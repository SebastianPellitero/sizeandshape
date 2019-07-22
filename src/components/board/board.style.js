/*------------------------------------------------*/
/* LIBRARIES
/*------------------------------------------------*/
import styled from 'styled-components';
/*------------------------------------------------*/
/* INTERNAL DEPENDENCIES
/*------------------------------------------------*/
import Grid from "@material-ui/core/Grid";
// Constant
import { THEME_KEYS } from "../../constants/theme";

const GridWrapper = styled(Grid)`
  background: ${THEME_KEYS.lavender};
  height: 100vh;
`;

export default GridWrapper;
