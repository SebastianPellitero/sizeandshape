/*------------------------------------------------*/
/* LIBRARIES
/*------------------------------------------------*/
import React, { Component } from "react";
/*------------------------------------------------*/
/* INTERNAL DEPENDENCIES
/*------------------------------------------------*/
// Styles
import GridWrapper from "./tutorial.style";
// Icons
import tick from "../../icons/tick.svg";
import center from "../../icons/center.svg";
import reset from "../../icons/reset.svg";
import list from "../../icons/list.svg";
// Components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

class Tutorial extends Component {
  render() {
    return (
      <GridWrapper container>
        <Grid item xs={8} className="inner-grid">
          <Typography gutterBottom variant="h4" component="h2">
            Draw simple shapes
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            The objective of this program is to draw simple shapes and interact
            with each other in real time. In order to make this interactive it
            use complex trigonometric formulas such as the Pythagorean theorem
            and Heron’s formula.
            You can follow this steps:
          </Typography>

          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <img src={tick} alt="icon" />
                </Avatar>
              </ListItemAvatar>
              <Typography variant="body1">
                Start clicking inside the canvas and watch how it draw each time
                a red dot in the selected coordinates.
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <img src={tick} alt="icon" />
                </Avatar>
              </ListItemAvatar>
              <Typography variant="body1">
                After the third point is added, the fourth point generates
                automatically constructing a parallelogram.
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <img src={tick} alt="Tick icon" />
                </Avatar>
              </ListItemAvatar>
              <Typography variant="body1">
                Try click and drag the red dots and the shape will recalculate
                accordingly.
              </Typography>
            </ListItem>
          </List>
          <Typography gutterBottom variant="h5" component="h4" className="subtitle">
            Things to take in mind
          </Typography>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <img src={center} alt="Center icon" />
                </Avatar>
              </ListItemAvatar>
              <Typography variant="body1">
                The yellow circle and the parallelogram have the same area.
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <img src={list} alt="List icon" />
                </Avatar>
              </ListItemAvatar>
              <Typography variant="body1">
                In the detail area you can see the data changing in real time.
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <img src={reset} alt="Reset icon" />
                </Avatar>
              </ListItemAvatar>
              <Typography variant="body1">
                The undo button will reset all the functionalities and you can
                start drawing from the start.
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </GridWrapper>
    );
  }
}

/*------------------------------------------------*/
/* PROP TYPES
/*------------------------------------------------*/
Tutorial.propTypes = {
  // Required
  // Not required
};

Tutorial.defaultProps = {};

/*------------------------------------------------*/
/* EXPORTS
/*------------------------------------------------*/
export default Tutorial;
