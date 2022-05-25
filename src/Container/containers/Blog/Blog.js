import React, { Component } from 'react';

import Post from '../../../Components/components/Post/Post';
import FullPost from '../../../Components/components/FullPost/FullPost';
import NewPost from '../../../Components/components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    


    render () {
        return (
            <div>
                <section className="Posts">
                    <Post />
                    <Post />
                    <Post />
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;