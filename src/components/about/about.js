/*------------------------------------------------*/
/* LIBRARIES
/*------------------------------------------------*/
import React, { Component } from "react";
/*------------------------------------------------*/
/* INTERNAL DEPENDENCIES
/*------------------------------------------------*/
// Styles
import GridWrapper from "../tutorial/tutorial.style";
// Components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class About extends Component {
  render() {
    return (
      <GridWrapper container>
        <Grid item xs={8} className="inner-grid">
          <Typography gutterBottom variant="h4" component="h2">
            About me
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Im
            <a href="https://www.linkedin.com/in/sebastian-pellitero/">
              {" "}
              Sebastian Pellitero
            </a>{" "}
            I'm a Frontend Dev from{" "}
            <a href="https://goo.gl/maps/4zZFfCFyBU1DAKGY7">Argentina</a>. I
            have been working around 3 years in this field building pages for
            several brand known companies.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            My passion started the first time I found a way to bring all the
            logic from a dark boring console to a nice looking browser and all
            the secrets behind it. From that moment on, I never stopped learning
            new things and I try to keep them updated.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            I worked not only with JS vanilla/ES6 but with ReactJS, that I
            consider my main library along Redux Thunk and Saga. I extended my
            practices to the mobile world with React-Native and learned all the
            similarities and difficulties working with Android and OS
            environments.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            I'm familiar with Material UI framework as well as Saas and good
            practices behind it. On my free time I am trying to extend my
            knowledge about Node and complete the Fullstack circle, and keep up
            with React updates, such as hooks and context. I'm a team player and
            I like to be part and create a good environment in the group, I love
            to share what I know and learn from others, not only from technology
            but about life and experiences.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            This challenge made me learn a lot of things about{" "}
            <a href="https://sebastianpellitero.github.io/InterfacesCanvasPaint/">
              canvas
            </a>
            , I took a course at udemy about making video games in canvas and
            that gave me some ground to start building. I never used canvas in
            React before so it was a challenge and I was astonished in the way
            that I could apply mathematics and trigonometry inside it.
          </Typography>
        </Grid>
      </GridWrapper>
    );
  }
}

/*------------------------------------------------*/
/* PROP TYPES
/*------------------------------------------------*/
About.propTypes = {
  // Required
  // Not required
};

About.defaultProps = {};

/*------------------------------------------------*/
/* EXPORTS
/*------------------------------------------------*/
export default About;
