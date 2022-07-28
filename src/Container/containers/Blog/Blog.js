import React, { Component } from 'react';

import './Blog.css';
import Posts from './Posts/Posts';
import {Route, Link} from 'react-router-dom';
// import  axios from 'axios';

class Blog extends Component {

    render () {       

        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/" >Home</Link></li>
                            <li><Link to={{
                                pathname: "/",
                                hash:"#submit",
                                search:"?quick-submit=true"
                            }}>New post</Link></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact Component={Posts}/>
            </div>
        );
    }
}

export default Blog;