import { CircularProgress, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

import useStyles from "./styles";
import { Post } from "./Post/Post";

export const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignContent="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post setCurrentId={setCurrentId} post={post} />
        </Grid>
      ))}
    </Grid>
  );
};
