import React from "react";
import { useDispatch, connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { GlobalState } from "../store/reducers";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { MediaState } from "../../../next-models/lib/redux-types";
import { searchMedia } from "../store/actions/media-action";

export interface ListResultProps {
  mediaState: MediaState;
}

const ListResult = (props: ListResultProps) => {
  const dispatch = useDispatch();

  const { data, hasMore, entityType, term, currentPage } = props.mediaState;

  const fetchMoreData = () => {
    dispatch(
      searchMedia({
        entityType,
        page: currentPage + 1,
        term,
      })
    );
  };

  console.log(props);

  if (data.length === 0) {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            sx={{ display: "inline" }}
            component="span"
            variant="body1"
            color="text.primary"
          >
            Not any records to display.
          </Typography>
        </Grid>
      </Grid>
    );
  }

  return (
    <div style={{ width: "100%", marginTop: "20px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <InfiniteScroll
            dataLength={data.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={
              <div
                style={{ width: "100%", textAlign: "center", marginTop: "2px" }}
              >
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body1"
                  color="text.primary"
                >
                  Loading...
                </Typography>
              </div>
            }
          >
            <List
              sx={{
                width: "100%",
                maxWidth: "100%",
                bgcolor: "background.paper",
              }}
            >
              {props.mediaState.data?.map((item, index) => (
                <>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt={item.artistName} src={item.artworkUrl100} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.collectionName}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {item.artistName}
                          </Typography>
                          {`Price: ${item.collectionPrice} ${item.currency}`}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </>
              ))}
            </List>
          </InfiniteScroll>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state: GlobalState) => ({
  mediaState: state.mediaState,
});

export default connect(mapStateToProps)(ListResult);
