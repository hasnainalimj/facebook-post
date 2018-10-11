import React, { Component } from "react";
import './App.css';
import Moment from 'react-moment';
import 'moment-timezone';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          createdBy: "Hasnain Ali",
          avatar:"http://www.stickpng.com/assets/images/585e4bcdcb11b227491c3396.png",
          description: "I'm not feeling good today!",
          images: ["https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg?auto=compress&cs=tinysrgb&h=350"],
          createdAt: Date.now(),
          likes: ["Shan", "Abdul Samad", "Mohammad Quanit"],
          comments : 5,
          status : "uploaded his cover photo.",
          liked : false
        },

        {
          createdBy: "Abdul Samad",
          avatar:"https://media.nngroup.com/media/people/photos/IMG_2366-copy-400x400.jpg.400x400_q95_autocrop_crop_upscale.jpg",
          description: "Happy Birthday to My Friend",
          images: ["https://livforcake.com/wp-content/uploads/2017/07/black-forest-cake-6.jpg"],
          createdAt: Date.now(),
          likes: ["Hasnain Ali", "Zain", "Mohammad Quanit", "Junaid"],
          comments : 7,
          status : "feeling happy.",
          liked : true
        },
      ]
    };

    this.liker = this.liker.bind(this);
    this.showList = this.showList.bind(this);
  }

  liker(ind) {
    const { posts } = this.state;
    const post = posts[ind].liked ? posts[ind].liked = false : posts[ind].liked = true;
    this.setState({
      posts
      // likes : posts[ind].likes ? posts[ind].likes.unshift('You') : posts[ind].likes.shift('You') 
    })
  }

  showList(ind){
    const {posts} = this.state;
    const list = posts[ind].likes;
    alert(list+ " Likes your Post");
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        {posts.map((elem,ind) => {
          return (
            <div className="container">
            <img src={elem.avatar} className="profile"/>
              <p className="username">{elem.createdBy}</p><span className="status">{elem.status}</span>
              
              
              <br/>
              <p className="description">{elem.description}</p>
              {elem.images.map( pics => {
                return <img src={pics} className="photo"/>
              })}
              <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/e4299734559659.56d57de04bda4.gif' className="reactions"/>
              {elem.liked ? <span className="peoples" onClick={this.showList.bind(this, ind)}>You, {elem.likes.length} Others</span> : <span className="peoples" onClick={this.showList.bind(this, ind)}>{elem.likes.length}</span>}     
                 
                 <span className="comments">{elem.comments} Comments</span>    
              <div className="options">
              {elem.liked ? <i class="fas fa-thumbs-up btnLike" style= {{color:'skyblue'}} onClick={this.liker.bind(this, ind)}></i> : <i class="fas fa-thumbs-up btnLike" onClick={this.liker.bind(this, ind)}></i>}
              <i class="fas fa-comment btnComment"></i>
              
              </div>
              <p className="postDuration"><Moment toNow>{elem.createdAt}</Moment></p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
