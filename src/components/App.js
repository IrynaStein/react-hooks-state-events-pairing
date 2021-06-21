import { useState } from "react"
import video from "../data/video.js";
import VideoInfo from "./VideoInfo"
import Buttons from "./Buttons"
// import SearchBar from "./SearchBar"
import NewCommentForm from "./NewCommentForm"

function App() {
  console.log(video)
  const { title, comments, views, createdAt, downvotes, upvotes, embedUrl } = video
  const [upVotes, setUpVotes] = useState(upvotes)
  const [downVotes, setDownVotes] = useState(downvotes)
  // const [search, setSearch] = useState("")
  const [name, setName] = useState("")
  const [newComment, setNewComment] = useState("")
  const [newCommentArray, setNewCommentArray] = useState(comments)


  function addUpVotes(likes) {
    const newUpVotes = likes + 1
    setUpVotes(newUpVotes)
  }

  function addDownVotes(likes) {
    const newDownVotes = likes + 1
    setDownVotes(newDownVotes)
  }

  function updateName(name) {
    setName(name)
    console.log(name)
  }

  function updateComment(newcomment) {
    setNewComment(newcomment)
    console.log(newcomment)
  }

  function submitNewComment(p1, p2) {
    const newArray = {
      id: 3, //post request will generate 
      user: p1,
      comment: p2
    }
    setNewCommentArray([...comments, newArray])
    setName("")
    setNewComment("")
  }
console.log(newCommentArray)

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <VideoInfo
        title={title}
        createdAt={createdAt}
        views={views}

      />
      {/* <SearchBar search={search} setSearch={setSearch}/> */}
      <Buttons
        setNewCommentArray={setNewCommentArray}
        addUpVotes={addUpVotes}
        upvotes={upVotes}
        addDownVotes={addDownVotes}
        downvotes={downVotes}
        comments={newCommentArray}
      />
      <NewCommentForm
        name={name}
        updateName={updateName}
        newComment={newComment}
        updateComment={updateComment}
        submitNewComment={submitNewComment}
      />
    </div>
  );
}

export default App;
