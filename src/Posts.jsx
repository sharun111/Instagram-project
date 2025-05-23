import React, { useEffect, useState } from 'react'

function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/posts').
            then((data) => data.json()).
            then((data => setPosts(data))).
            catch(err => console.log(err))
    }), [];
    return (
        <div className='d-flex justify-content-center'>
            {posts.length > 0 ? (
                <div>
                    {posts.map((post) => (
                        <div className='my-3' key={post.id}>
                            <div className='d-flex'>
                                <img className="dp rounded-circle" src={post.user.profile_pic} alt="profile pic" />
                                <h5>{post.user.username}</h5>
                            </div>
                            <img className="image" src={post.image} alt="" />
                            <div>
                            <i className="bi bi-heart-fill"></i>
                            <i className="bi bi-chat-fill"></i>
                            <i className="bi bi-telegram"></i>
                            </div>
                            <div>
                                <div>
                                    <b>{post.likes} Likes</b>
                                </div>
                            </div>
                        </div>

                       
                    ))}
                </div>
            ) : (
                <div>loading posts</div>
            )}
        </div>
    )
}

export default Posts