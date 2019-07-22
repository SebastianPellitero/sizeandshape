/*------------------------------------------------*/
/* LIBRARIES
/*------------------------------------------------*/
import styled from "styled-components";
// Constant
import { THEME_KEYS } from "../../constants/theme";
import { Grid } from "@material-ui/core";

const DetailsWrapper = styled(Grid)`
  margin-top: 20px;
  margin-right: 20px;
  color: ${THEME_KEYS.white};

  .MuiGrid-container {
    background-color: ${THEME_KEYS.cherry};
    border-radius: 5px;
    padding: 20px;
  }

  h6 {
    color: ${THEME_KEYS.white};
    font-weight: bold;
  }

  .circle-title {
    margin-top: 50px;
  }
`;

export default DetailsWrapper;
