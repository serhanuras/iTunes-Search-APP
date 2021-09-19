import React from "react";
import { Box, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import type { ReactNode } from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: "#D8D8D8",
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
  },
  body: {},
  divider: {
    backgroundColor: "#282828",
    height: "10px",
  },
  header: {
    backgroundColor: "#0044CC",
    color: "#FFFFFF",
    fontWeight: "bolder",
    fontSize: "24px",
    textAlign: "center",
    paddingTop: "25px",
    paddingBottom: "10px",
  },
  childrenWrapper: {
    padding: "20px",
  },
});

const MainLayout = ({ children }: { children: ReactNode }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.root}>
        <Box className={classes.body}>
          <Box className={classes.header}>
            <Typography variant="h3" component="div" gutterBottom>
              iTunes Search
            </Typography>
          </Box>
          <Box className={classes.divider} />
          <div className={classes.childrenWrapper}>{children}</div>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default MainLayout;
