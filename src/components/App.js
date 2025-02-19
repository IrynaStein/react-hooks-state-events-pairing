import { useState } from "react"
import video from "../data/video.js";
import VideoInfo from "./VideoInfo"
import Buttons from "./Buttons"

function App() {
  console.log(video)
  const { title, comments, views, createdAt, downvotes, upvotes, embedUrl } = video
  const [upVotes, setUpVotes] = useState(upvotes)
  const [downVotes, setDownVotes] = useState(downvotes)
  

  function addUpVotes(likes) {
    const newUpVotes = likes + 1
    setUpVotes(newUpVotes)
  }

  function addDownVotes(likes) {
    const newDownVotes = likes + 1
    setDownVotes(newDownVotes)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
      <VideoInfo
        title={title}
        createdAt={createdAt}
        views={views}

      />
      <Buttons
        addUpVotes={addUpVotes}
        upvotes={upVotes}
        addDownVotes ={addDownVotes}
        downvotes={downVotes}
        comments={comments} 
        />
    </div>
  );
}

export default App;
