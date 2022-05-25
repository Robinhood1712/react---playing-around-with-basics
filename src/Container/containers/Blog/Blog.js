import React, { Component } from 'react';

import Post from '../../../Components/components/Post/Post';
import FullPost from '../../../Components/components/FullPost/FullPost';
import NewPost from '../../../Components/components/NewPost/NewPost';
// import Axios from ''
import './Blog.css';

class Blog extends Component {

    constructor(props){
        super(props)
          this.state = {
              posts: []
            }
      }

    componentDidMount(){
        axios.get('https:jsonplaceholder.typeicode.com').then(response => {
            // console.log(response)
            const posts = response.data.slice(0, 4)
            const updatedPost = posts.map(post => {
                return {
                    ...post,
                    author: 'demola'
                }
            })
            this.setState({
                posts: updatedPost
            })
        })
    }



    


    render () {

        const posts = this.state.posts.map(post => {
            return <Post
                     title = {post.title}
                     key = {post.id}
                     author = {post.author}
                     />
        })


        return (
            <div>
                <section className="Posts">
                    {posts}
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