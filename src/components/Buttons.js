import { useState } from "react"
import CommentList from "./CommentList"

function Buttons({ upvotes, downvotes, comments, addUpVotes, addDownVotes }) {
    const [commentsPanel, setCommentsPanel] = useState(true)

    function displayComments() {
        setCommentsPanel(!commentsPanel)
    }
    console.log(commentsPanel)
    return (
        <div>
            <button onClick={() => addUpVotes(upvotes)}>👍 {upvotes}</button>
            <button onClick={() => addDownVotes(downvotes)}>👎 {downvotes}</button>
            <br />
            <button onClick={() => displayComments()}>{commentsPanel ? "Hide Comments" : "Show Comments"}</button>
            <CommentList commentsPanel={commentsPanel} comments={comments} />
        </div>
    )
}

export default Buttons;