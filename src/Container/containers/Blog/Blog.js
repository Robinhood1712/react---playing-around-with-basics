import React, { Component } from 'react';

import Post from '../../../Components/components/Post/Post';
import FullPost from '../../../Components/components/FullPost/FullPost';
import NewPost from '../../../Components/components/NewPost/NewPost';
import './Blog.css';
import  axios from 'axios';

class Blog extends Component {

    constructor(props){
        super(props)
          this.state = {
              posts: [],
              postSelectedId: null
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

    postSelectedHandler = (id) => {
        this.setState({
            postSelectedId: id

        })
    }



    


    render () {

        const posts = this.state.posts.map(post => {
            return <Post
                     clicked = {() => this.postSelectedHandler(post.id)}
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
                    <FullPost id = {this.state.postSelectedId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;