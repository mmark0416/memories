import { Pagination, PaginationItem } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPosts } from "../actions/posts";

import useStyles from "./styles";
import { Link } from "react-router-dom";

const Paginate = ({ page }) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { numberOfPages } = useSelector((state) => state.posts);

  useEffect(() => {
    if (page) {
      dispatch(getPosts(page));
    }
  }, [page]);

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/posts?page=${item.page}`}
          classes={{ ul: classes.ul }}
        />
      )}
    />
  );
};

Paginate.propTypes = {
  page: PropTypes.number,
};

export default Paginate;
