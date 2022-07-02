import React, {Component} from "react";
import Post from "../../../../Components/components/Post/Post";
import axios from "axios";
import './Posts.css';


class Posts extends Component {

    constructor(props){
        super(props)
          this.state = {
              posts: []
            //   postSelectedId: null,
            //   error: false
            }
      } 

      postSelectedHandler = (id) => {
        this.setState({
            postSelectedId: id
        })
    }

    componentDidMount(){
        axios.get('https:jsonplaceholder.typeicode.com/posts').then(response => {
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
        .catch(error => {
            console.log(error)
            // this.setState({
            //     error: error
            // })
        })
    }

    render(){
        let posts = <p style={{textAlign: 'Center'}}>something went wrong</p>
        if (!this.state.error){
            posts = this.state.posts.map(post => {
                return <Post
                     clicked = {() => this.postSelectedHandler(post.id)}
                     title = {post.title}
                     key = {post.id}
                     author = {post.author}
                     />
            })
        }

        return(
            <section className="Posts">
                {posts}
            </section>
        )
    }
}


export default Posts;