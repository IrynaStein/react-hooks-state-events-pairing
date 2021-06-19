function CommentList({ comments, commentsPanel }) {

// console.log(commentsPanel)
    const renderComments = () => {
        if (commentsPanel){
            return comments.map((comment) => {
                return (
                    <div>
                        <h4>{comment.user}</h4>
                        <p>{comment.comment}</p>
                    </div>
                )
            })
        }
        // else {
        //     return null
        // }
        
    }
    return (
        <div className="comment-panel">
            {renderComments()}
        </div>
    )
}

export default CommentList