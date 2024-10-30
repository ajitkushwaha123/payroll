import React from "react";

const CommentFormatter = ({ comment }) => {
  const tagFormatter = (comment) => {
    let formattedComment = [];
    let lastIndex = 0;

    for (let i = 0; i < comment.length; i++) {
      if (comment[i] === "@") {
        for (let j = i; j < comment.length; j++) {
          if (comment[j] === " ") {
            formattedComment.push(
              <span key={lastIndex}>{comment.substring(lastIndex, i)}</span>
            );
            formattedComment.push(
              <span key={i} className="text-primary">
                {comment.substring(i, j)}
              </span>
            );
            lastIndex = j;
            i = j; 
            break;
          }
        }
      }
    }

    formattedComment.push(
      <span key={lastIndex}>{comment.substring(lastIndex)}</span>
    );

    return <div>{formattedComment}</div>;
  };

  return <div>{comment.length > 0 ? tagFormatter(comment) : null}</div>;
};

export default CommentFormatter;
