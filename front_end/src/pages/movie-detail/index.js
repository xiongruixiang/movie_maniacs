import React, {Component} from 'react';
import './index.css'
import Header from '../../component/header'
import {Rate, Empty, Button} from "antd";
import imagesMap from "../../constants/images-map";

export default class MovieDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    addLikes(num) {
        console.log(num)
    }


    render() {
        let {movie_info, review, user} = this.props.location.state
        console.log(review)
        console.log(user)
        return (
            <div>
                <Header/>
                <div className='detail-wapper'>
                    <div className='movie-detail-container'>
                        <p className='movie-name'>{movie_info.movie_name}</p>
                        <div className='movie-info'>
                            <div>
                                <img src={movie_info.image} alt='movie-poster' height='380' width='260'/>
                            </div>
                            <div className='movie-message'>
                                <p><span>Director:</span> {movie_info.director}</p>
                                <p><span>Leading actor:</span> {movie_info.leading_actor}</p>
                                <p><span>Country of production:</span> {movie_info.country_of_production}</p>
                                <p><span>Language:</span> {movie_info.language}</p>
                                <p><span>Release data:</span> {movie_info.release_data}</p>
                                <p><span>Length:</span> {movie_info.length}</p>
                                <p><span>Rating:</span> {movie_info.rating}</p>
                                <Rate disabled defaultValue={movie_info.rating}/>
                            </div>
                        </div>
                        <p className='introduction'>
                            <span className='intro-message'>Introduction: </span>
                            {movie_info.introduction}
                        </p>
                        <div className='review'>
                            <div className='write-button'>
                                <p className='review-tip'>Review</p>
                                <Button className='write-btn'>Write a Review</Button>
                            </div>
                            {review.length === 0 ? (
                                <div className='empty-show'>
                                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='There is no review'/>
                                    <a className='write-review-link'>Click here to write the first review!</a>
                                </div>
                            ) : review.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <p className='user-and-review'>{user[index]}:
                                            <span> {item.content}</span>
                                            <a className='likes' onClick={() => this.addLikes(index)}>&nbsp;&nbsp;&nbsp;&nbsp;<span>{item.likes}</span> likes</a>
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <footer className='home-footer'>
                    <a>--The End--</a>
                </footer>
            </div>
        );
    }
}