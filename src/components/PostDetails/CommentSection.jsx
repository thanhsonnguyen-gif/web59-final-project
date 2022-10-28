import React, { useEffect, useRef, useState } from "react";
import { Typography, Button, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { commentPost } from '../../actions/posts'

import useStyles from "./styles";

const CommentSection = ({ post }) => {
  console.log(post);

  const classes = useStyles();
  const dispatch = useDispatch()
  const [comments, setComments] = useState([1, 3, 5]);
  const [comment, setComment] = useState("");
  const user = JSON.parse(localStorage.getItem('profile'))
  const handleClick = () => {
    const finalComment = `${user.result.name}: ${comment}`
    dispatch(commentPost(finalComment, post._id))
  };

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant="h6">
            Comments
          </Typography>
          {comments.map((c, i) => (
            <Typography key={i} variant="subtitle1" gutterBottom>
              Comment {i}
            </Typography>
          ))}
        </div>
        <div style={{ width: "70%" }}>
          <Typography gutterBottom variant="h6">
            Write your comment here!
          </Typography>
          <TextField
            fullWidth
            rows={4}
            variant="outlined"
            label="Comment"
            multiline
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            style={{ marginTop: "10px" }}
            fullWidth
            disabled={!comment}
            variant="contained"
            onClick={handleClick}
          >
            Comment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
