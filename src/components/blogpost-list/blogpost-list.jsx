import React from "react";
import { BlogPost } from "../blogpost/blogpost";
import './blogpost-list.css'
export const BlogPostList = props => {
    return(
        <div className="blogpost-list">
            {props.posts.map(post => <BlogPost title={post.title} body={post.body} />)}
        </div>
    );
}