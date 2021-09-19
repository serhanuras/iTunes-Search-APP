import React, { useState } from "react";
import { EntityType } from "@next/models/lib/entities";
import { useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { searchMedia } from "../store/actions/media-action";

const useStyles = makeStyles({
  body1: {
    paddingTop: "20px",
  },
  body2: {
    color: "#3914AF",
  },
  form: {
    width: "90%",
  },
});

interface ComponentState {
  search: string;
  entityType: string;
  hasValidationError?: boolean;
}

const SearchBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [componentState, setComponentState] = useState<ComponentState>({
    search: "",
    entityType: EntityType.Artist,
  });

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComponentState({
      ...componentState,
      search: e.target.value,
    });
  };

  const handleOptionChange = (e: React.ChangeEvent<any>) => {
    setComponentState({
      ...componentState,
      entityType: e.target.value,
    });
  };

  const handleSearch = () => {
    if (componentState.search.length < 2) {
      setComponentState({
        ...componentState,
        hasValidationError: true,
      });
    } else {
      dispatch(
        searchMedia({
          entityType: componentState.entityType as EntityType,
          page: 1,
          term: componentState.search,
        })
      );

      setComponentState({
        ...componentState,
        hasValidationError: false,
      });
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom component="div">
          Detail About Application
        </Typography>
        <Typography variant="body2" className={classes.body2}>
          Vivamus lacinia rhoncus scelerisque. Pellentesque luctus euismod metus
          non condimentum. Duis tempor sed neque vitae commodo. Proin eget
          luctus ante. Sed semper bibendum metus in volutpat. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Praesent ac pretium odio. Nunc nunc odio, luctus sed
          malesuada at, interdum ut turpis. Donec et placerat urna, sit amet
          suscipit magna. Maecenas egestas vitae tellus non aliquam. Sed vitae
          est non felis imperdiet ultrices a eget nisi. Proin sed vulputate
          nisi, a aliquet ligula. In tincidunt commodo diam.
        </Typography>

        <Typography variant="body1" className={classes.body1}>
          You can perform a search query about an artist, album or song from
          ITunes. Please type the search text for artist or album or song.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          display: componentState.hasValidationError ? "block" : "none",
        }}
      >
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">
            Search should contain at least 2 characters.
          </Alert>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <FormControl component="fieldset" className={classes.form}>
          <TextField
            id="standard-basic"
            label="Search"
            variant="standard"
            value={componentState.search}
            onChange={handleTextChange}
          />
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl component="fieldset" className={classes.form}>
          <FormLabel component="legend">Media Type</FormLabel>
          <RadioGroup
            row
            aria-label="entityType"
            name="row-radio-buttons-group"
            value={componentState.entityType}
            onChange={handleOptionChange}
          >
            <FormControlLabel
              value={EntityType.Artist}
              control={<Radio />}
              label="Artist"
            />
            <FormControlLabel
              value={EntityType.Album}
              control={<Radio />}
              label="Album"
            />
            <FormControlLabel
              value={EntityType.Song}
              control={<Radio />}
              label="Song"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={2} className={classes.form}>
        <FormControl component="fieldset" className={classes.form}>
          <Button variant="contained" onClick={handleSearch}>
            SEARCH
          </Button>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
