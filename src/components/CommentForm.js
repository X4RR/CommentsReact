import { useState } from 'react';
import styles from './style/CommentForm.module.css';

export default function CommentForm(props) {
  const { addComment } = props;
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const textHeightHandler = (event) => {
    event.target.style.height = 'inherit';
    event.target.style.height = `${event.target.scrollHeight}px`;
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addComment(text, name);
    setText('');
    setName('');
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          className={styles.name}
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className={styles.comment}
          placeholder="Enter comment"
          value={text}
          onKeyDown={textHeightHandler}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
}
