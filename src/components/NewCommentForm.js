function NewCommentForm({ name, updateName, newComment, updateComment, submitNewComment }) {

    const handleSubmit = (e) => {
        e.preventDefault()
        submitNewComment(name, newComment)
    }

    return (
        <form className="comment-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="enter user name..."
                value={name}
                onChange={(e) => { updateName(e.target.value) }}
            />
            <input
                type="text"
                placeholder="enter comment"
                value={newComment}
                onChange={(e) => {updateComment(e.target.value)}}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default NewCommentForm;