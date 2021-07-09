import React from 'react'

const Post  = ({posts, loading}) => {

    const renderList = posts.map((post)=>{
        return (
            <li key={post.id} className='list-group-item'>{post.title}</li>
        )
    })

    if(loading){
        return <h2>loading...</h2>
    }

    return(
        <ul className='list-group mb-2'>
          {renderList}
        </ul>
    )
}

export default Post
