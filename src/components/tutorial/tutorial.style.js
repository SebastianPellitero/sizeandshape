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
  padding: 40px;
  .inner-grid {
    background-color: ${THEME_KEYS.white};
    padding: 20px 40px;
    margin: 0 auto;
  }
  ul {
    background-color: ${THEME_KEYS.cherry};
    color: ${THEME_KEYS.white};
    border-radius: 5px;
    padding: 20px;
  }
  .subtitle {
    padding: 50px 0 10px 0;
  }
  .MuiAvatar-colorDefault {
    background-color: ${THEME_KEYS.white};
  }
`;

export default GridWrapper;
