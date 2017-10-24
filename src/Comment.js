import React from 'react'

function Comment({comment}) {
	return (
		<div>
			<p>{comment.text}</p> <b>by {comment.user}</b>
		</div>
	)
}

export default Comment