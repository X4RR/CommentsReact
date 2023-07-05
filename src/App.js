import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';

import { v4 as uuidv4 } from 'uuid';

function App() {
  // const nAD = [
  //   {
  //     // text: '',
  //     // name: '',
  //     // isLiked: '',
  //     // id: '',
  //   },
  // ];
  const [newComments, setNewComments] = useState([]);
  const { index, setIndex } = useState(0);
  const incIndex = () => {
    setIndex(index + 1);
  };

  function addCommentHandler(text, name) {
    const newAddComment = {
      text: text,
      name: name,
      isLiked: false,
      id: uuidv4(),
    };
    console.log(newAddComment);
    console.log(typeof newAddComment);
    console.log(newComments);

    setNewComments([...newComments, newAddComment]);
  }
  const delCommentHandler = (id) => {
    setNewComments(newComments.filter((newComment) => newComment.id !== id));
  };
  const likeCommentHandler = (id) => {
    setNewComments(
      newComments.map((newComment) => {
        return newComment.id === id
          ? { ...newComment, isLiked: !newComment.isLiked }
          : { ...newComment };
      })
    );
  };
  return (
    <div className="App">
      <CommentForm addComment={addCommentHandler} />
      <CommentList
        comments={newComments}
        delComment={delCommentHandler}
        likeComment={likeCommentHandler}
      />
    </div>
  );
}

export default App;
