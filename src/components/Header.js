import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../ruth.jpg";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    margin: theme.spacing(1),
  },
  title: {
    color: "turquoise",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Ruth Onuoha" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Ruth Onuoha"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Computer Engineer",
            "Frontend Developer",
            "Product Manager",
            "UI/UX Developer",
            "Blockchain Enthusiast",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
