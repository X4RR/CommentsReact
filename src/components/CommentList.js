import React from 'react';
import Comment from './Comment';
import styles from './style/CommentList.module.css';

export default function CommentList({ comments, delComment, likeComment }) {
  return (
    <div className={styles.wrapper}>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          // name={comment.name}
          comment={comment}
          delComment={delComment}
          likeComment={likeComment}
        />
      ))}
    </div>
  );
}
