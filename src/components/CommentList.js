// import SearchBar from "./SearchBar"

function CommentList({ comments, commentsPanel, deleteComment }) {

console.log(comments)
    const renderComments = () => {
        if (commentsPanel) {
            return comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <h4>{comment.user}</h4>
                        <p>{comment.comment}</p>
                        <button onClick={() => deleteComment(comment.id)}>delete {`${comment.user}'s comment`}</button>
                    </div>
                )
            })
        }
    }


    return (
        <div className="comment-panel">
            <h2>This video has {comments.length} comments</h2>
            {renderComments()}
        </div>
    )
}

export default CommentList