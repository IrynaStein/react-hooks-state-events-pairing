import { useState } from "react"
import CommentList from "./CommentList"

function Buttons({ upvotes, downvotes, comments, addUpVotes, addDownVotes, setNewCommentArray }) {
    const [commentsPanel, setCommentsPanel] = useState(true)
    
console.log(comments)

    function deleteComment(id) {
        const newCommentList = comments.filter((comment) => {
            return id !== comment.id
        })
        setNewCommentArray(newCommentList)
    }

    function displayComments() {
        setCommentsPanel(!commentsPanel)
    }
    
    return (
        <div>
            <button onClick={() => addUpVotes(upvotes)}>👍 {upvotes}</button>
            <button onClick={() => addDownVotes(downvotes)}>👎 {downvotes}</button>
            <br />
            <button onClick={() => displayComments()}>{commentsPanel ? "Hide Comments" : "Show Comments"}</button>
            <CommentList
                deleteComment={deleteComment}
                commentsPanel={commentsPanel}
                comments={comments} />
        </div>
    )
}

export default Buttons;