import React, { useState } from 'react';
import icon from '../images/like_icon.png';
import { Card } from 'antd';

const Post = ({title, content}) => {
    const [likes, setLikes] = useState(0);

    return (
        <Card
            title={title}
            style={{
                width: 300,
            }}
        >
            <p>{content}</p>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <button style={{margin: "10px"}}>
                    <img src={icon} alt="my image" width="30px" height="30px" onClick={() => setLikes(likes + 1)} />
                </button>
                <p>{likes}</p>
            </div>
            
        </Card>
    )
}

export default Post;