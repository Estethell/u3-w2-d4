import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";
import { useState, useEffect } from "react";

const CommentArea = (props) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (props.asin) {
      const fetchComments = () => {
        setIsLoading(true);
        fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY5OWU2ZjA0NTg5ZjAwMTk0OGU1YmQiLCJpYXQiOjE3MTA4NTc4MzksImV4cCI6MTcxMjA2NzQzOX0.BSotV1Bzo4OFxIJoRYB6sZkNh2CMOsE0paL3dkCUvE4",
          },
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              setIsError(true);
            }
          })
          .then((comments) => {
            setComments(comments);
            setIsLoading(false);
            setIsError(false);
            console.log("ciao");
          })

          .catch((error) => {
            console.log(error);

            setIsLoading(false);
            setIsError(true);
          });
      };
      fetchComments();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.asin]);

  return (
    <div data-testid="area" className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={props.asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
