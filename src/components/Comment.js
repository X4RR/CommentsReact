import React from 'react';
import styles from './style/Comment.module.css';

export default function Comment({ comment, delComment, likeComment }) {
  return (
    <div className={styles.commentBox}>
      <h1 className={styles.nameHeading}>{comment.name}</h1>
      <p>{comment.text}</p>
      <div className={styles.actionsRow}>
        <div onClick={() => likeComment(comment.id)}>
          <svg
            width="24"
            className={comment.isLiked ? styles.like : styles.dislike}
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
              fill="#545454"
            />
          </svg>
        </div>
        <div onClick={() => delComment(comment.id)}>
          <svg
            className={styles.delete}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z"
              fill="#545454"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
