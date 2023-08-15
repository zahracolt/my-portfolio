import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GitHub from "@material-ui/icons/GitHub";
import Twitter from "@material-ui/icons/Twitter";
// import Instagram from "@material-ui/icons/Instagram";
import LinkedIn from "@material-ui/icons/LinkedIn";


const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <a href="https://www.github.com/zahracolt">
        <BottomNavigationAction icon={<GitHub />} className={classes.root} />
      </a>
      <a href="https://www.twitter.com/zahracolt">
        <BottomNavigationAction icon={<Twitter />} className={classes.root} />
      </a>
      {/* <a href="https://www.instagram.com">
        <BottomNavigationAction icon={<Instagram />} className={classes.root} />
      </a> */}
      <a href="https://www.linkedin.com/in/chizaram-onuoha-7b43a4134">
        <BottomNavigationAction icon={<LinkedIn />} className={classes.root} />
      </a>
    </BottomNavigation>
  );
};

export default Footer;
