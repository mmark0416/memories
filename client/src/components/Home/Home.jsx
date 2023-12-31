import {
  Container,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import ChipInput from "material-ui-chip-input";

//components
import { Posts } from "../Posts/Posts";
import { Form } from "../Form/Form";
import Pagination from "../Pagination";

//styles
import useStyles from "./styles";

//actions
import { getPosts, getPostsBySearch } from "../../actions/posts";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  const query = useQuery();
  const navigate = useNavigate();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      // searchPost();
    }
  }

  const handleAdd = (tag) => setTags([...tags, tag])

  const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete))

  const searchPost = (e) => {
    e.preventDefault()
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      navigate('/');
    }
  }

  return (
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
          className={classes.gridContainer}
        >
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3} >
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                name="search"
                variant="outlined"
                label="Search Memories"
                fullWidth
                onKeyDown={handleKeyPress}
                value={search}
                onChange={(e) => {setSearch(e.target.value)}}
              />
              <ChipInput 
                style={{ margin: "10px 0" }}
                value={tags}
                onAdd={handleAdd}
                onDelete={handleDelete}
                label="Search Tags"
                variant="outlined"
              />
              <Button
                onClick={searchPost}
                className={classes.searchButton}
                variant="contained"
                color="primary"
              >
                Search
              </Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper elevation={6}>
              <Pagination page={page} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
  );
};
