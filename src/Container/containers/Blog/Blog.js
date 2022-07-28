import React, { Component } from 'react';

import './Blog.css';
import Posts from './Posts/Posts';
import {Route, NavLink} from 'react-router-dom';
// import  axios from 'axios';

class Blog extends Component {

    render () {       

        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact >Home</NavLink></li>
                            <li><NavLink to={{
                                pathname:this.props.match.url + "/",
                                hash:"#submit",
                                search:"?quick-submit=true"
                            }}>New post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact Component={Posts}/>
            </div>
        );
    }
}

export default Blog;