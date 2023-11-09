import { Container, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

//components
import { Posts } from "../Posts/Posts";
import { Form } from "../Form/Form";

//styles
import useStyles from "./styles";

//actions
import { getPosts } from "../../actions/posts";

export const Home = () => {
  const [currentId, setCurrentId] = useState(null);

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Container>
      <Grid
        className={classes.mainContainer}
        container
        justifyContent="space-between"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12} sm={7}>
          <Posts setCurrentId={setCurrentId} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Grid>
      </Grid>
    </Container>
  );
};
