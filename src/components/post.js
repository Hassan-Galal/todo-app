import React , {Component} from 'react';
import {connect} from 'react-redux';
import Coloring from '../coloring/supeer';
class Post extends Component {
   
    render(){
        console.log(this.props)
        const post =this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
            </div>
        ):(
            <div className="center">Loading post...</div>
        )
        return(
            <div className="container">
               {post}
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps)=>{
    let id= ownProps.match.params.post_id;
    return{
        post: state.posts.find((post)=> post.id = id)
    }
}
export default Coloring(connect(mapStateToProps)(Post)) ;