/*------------------------------------------------*/
/* LIBRARIES
/*------------------------------------------------*/
import styled from "styled-components";
/*------------------------------------------------*/
/* INTERNAL DEPENDENCIES
/*------------------------------------------------*/
import AppBar from "@material-ui/core/AppBar";
// Constant
import { THEME_KEYS } from "../../constants/theme";
import { Toolbar } from "@material-ui/core";

export const AppBarWrapper = styled(AppBar)`
  &.MuiAppBar-root {
    background-color: ${THEME_KEYS.oceanBlue};
  }

  a {
    text-decoration: none;
    color: ${THEME_KEYS.white};
    font-size: 18px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ToolbarWrapper = styled(Toolbar)`
  display: flex;
  justify-content: space-between;

  .right-container {
    a:last-of-type span {
      margin-left: 20px;
    }
  }
`;
