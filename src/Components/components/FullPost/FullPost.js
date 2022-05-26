import axios from 'axios';
import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {

    constructor(props){
        super(props)
          this.state = {
              fetchedPost : null
            }
      }

      componentDidMount () {
          axios.get('getdata' + this.props.post.id).then(
              response => {
                  this.setState({
                      fetchedPost: response.data
                  })
              }
          )
          
      }



    render () {
        let post = <p>Please select a Post!</p>;
        if (this.props.id){

            post = (
                <div className="FullPost">
                    <h1>{this.state.fetchedPost}</h1>
                    <p>Content</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
            );
        }
        
        return post;
    }
}

export default FullPost;