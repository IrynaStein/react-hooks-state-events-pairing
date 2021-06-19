
function VideoInfo({ title, views, createdAt, downvotes, upvotes }) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{views} Views | Uploaded {createdAt}</p>
        </div>

    )

}

export default VideoInfo;