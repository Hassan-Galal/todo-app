import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import PostIm from './logotodo.png';
class Updates extends Component{
    
    render(){
        
        const {posts}=this.props;
        const postsList=posts.length ? (
            posts.map(post=>{
                return (
                    <div className="post card " key={post.id}>
                        <img src= {PostIm}  alt="her a photoa"/>
                        <div className="card-content">
                            <Link to={"/"+post.id}>
                            <span className="card-title orange-text" >
                                {post.title}
                            </span>
                            </Link>
                            <p className="red-text">{post.body}</p>
                        </div>
                    </div>
                )
            })
        ):(
            <div className="center">No posts yet</div>
        )
        return(
            <div className="container home">
                <h4 className="center">Updates</h4>
                {postsList}
            </div>
        )
    }
    
}

const mapStateToProps = (state)=>{
    return{
        posts: state.posts
    }
}
export default connect(mapStateToProps)(Updates) ;