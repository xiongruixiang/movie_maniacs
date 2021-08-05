import React, {Component, createElement} from 'react';
import './index.css'
import Header from '../../component/header'
import {Image, Descriptions, Space, Rate, Card, Button, Tooltip, List, Comment, Avatar, message} from 'antd';
import {LikeOutlined, LikeFilled} from '@ant-design/icons';
import $ from 'jquery'

const error = () => {
    message.error('Please login');
};

export default class MovieDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movie_info: [],
            review: [],
            user: []
        }
    }

    componentDidMount() {
        let {movie_name_slug} = this.props.location.state
        this.getMovieDetail(movie_name_slug)
    }

    getMovieDetail(movie_name) {
        let movie_name_slug = movie_name.toLowerCase().split(' ').join('-')
        let url = "http://127.0.0.1:8000/api/movie/" + movie_name_slug + "/"
        $.get(url, (result) => {
            if (result.status === 200) {
                this.setState({
                    movie_info: result.data,
                    review: result.review,
                    user: result.user
                })
            }
        })
    }

    addLikes(index, movie_name) {
        let username = localStorage.getItem('username')
        if (username) {
            let slug_name = movie_name.toLowerCase().split(' ').join('-')
            let likes_element = document.getElementsByClassName('likes-number')[index]
            let new_likes = Number(likes_element.innerHTML) + 1
            likes_element.innerHTML = new_likes
            let url = 'http://127.0.0.1:8000/api/movie/' + slug_name + '/add-likes/'
            let params = {
                new_likes: new_likes,
                movie_name: movie_name,
                review_index: index
            }
            $.post(url, params, (result) => {
                if (result.status === 200) {
                }
            })
        } else {
            error()
        }
    }

    goToAddReviewPage(movie_name) {
        let username = localStorage.getItem('username')
        if (username) {
            let pathname = '/movie/' + movie_name + '/add-review'
            this.props.history.push({
                pathname: pathname,
                state: {
                    movie_name: movie_name
                }
            })
        } else {
            error()
        }
    }


    render() {
        let {movie_info, review, user} = this.state
        let {movie_name_slug} = this.props.location.state
        return (
            <div>
                <Header/>
                <div className="movie-page">

                    <div className="movie-name">
                        {movie_info.movie_name}
                    </div>

                    <br/>

                    <div>
                        <Space size={50}>
                            <Image height={280} width={200} src={movie_info.image}/>
                            <Descriptions bordered size={"small"} column={1}>
                                <Descriptions.Item label="Director">{movie_info.director}</Descriptions.Item>
                                <Descriptions.Item label="Actor">{movie_info.leading_actor}</Descriptions.Item>
                                <Descriptions.Item
                                    label="Country of Production">{movie_info.country_of_production}</Descriptions.Item>
                                <Descriptions.Item label="Language">{movie_info.language}</Descriptions.Item>
                                <Descriptions.Item label="Release Date">{movie_info.release_date}</Descriptions.Item>
                                <Descriptions.Item label="Length">{movie_info.length}</Descriptions.Item>
                                <Descriptions.Item label="Rating">
                                    <Space>
                                        {movie_info.rating}
                                    </Space>
                                </Descriptions.Item>
                            </Descriptions>
                        </Space>
                    </div>

                    <br/>

                    <div>
                        <div className="introduction-header">
                            Introduction
                        </div>
                        <Card>
                            <p>{movie_info.introduction}</p>
                        </Card>
                    </div>

                    <br/>

                    <div className="review-header">
                        Reviews ( {review.length} )
                    </div>

                    <div>
                        <List
                            className="comment-list"
                            itemLayout="horizontal"
                            dataSource={review}
                            renderItem={(item, index) => (
                                <li>
                                    <Card>
                                        <Space>
                                            Rating: {item.rating}
                                            <Rate disabled defaultValue={item.rating}/>
                                        </Space>
                                        <Comment
                                            avatar={<Avatar
                                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                                alt="Han Solo"/>}
                                            author={user[index]}
                                            content={item.content}
                                            actions={[
                                                <Tooltip key="comment-like" title="Like">
                                                    <span onClick={() => this.addLikes(index, movie_info.movie_name)}>
                                                        {createElement(item.action === 'liked' ? LikeFilled : LikeOutlined)}
                                                        &nbsp;<span
                                                        className="comment-action likes-number">{item.likes}</span>
                                                    </span>
                                                </Tooltip>
                                            ]}
                                        />
                                    </Card>
                                </li>
                            )}
                        />
                    </div>

                    <br/>

                    <Button className="add-review-button" onClick={() => this.goToAddReviewPage(movie_name_slug)}>
                        + Review
                    </Button>

                </div>
                <footer className='detail-footer'/>
            </div>
        )
    }
}