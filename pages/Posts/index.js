import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CircularProgress,
  makeStyles,
  Slide,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Zoom,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "../../redux/actions";
import Dashboard from "../Dashboard";
import PostsWrapper from "./PostsWrapper";

const useStyles = makeStyles({
  root: {
    maxWidth: "45%",
    margin: 20,
  },
});
const Posts = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    setTodos(dispatch, "POSTS");
  }, []);

  const data = useSelector((state) => state.posts);
  console.log(data);
  const loading = useSelector((state) => state.loading);

  return (
    <Dashboard>
      <PostsWrapper>
        <h1 className="mb-4">Posts</h1>
        {loading ? (
          <CircularProgress size={100} />
        ) : (
          <Box display="flex" flexWrap="wrap">
            {data.map((v, i) => (
              <Zoom in={data} key={i} timeout={i * 500}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h4"
                        color="primary"
                        component="h6"
                      >
                        {v.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {v.body}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Zoom>
            ))}
          </Box>
        )}
      </PostsWrapper>
    </Dashboard>
  );
};

export default Posts;
