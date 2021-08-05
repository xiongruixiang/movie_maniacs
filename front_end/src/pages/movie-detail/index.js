import React, { Component, createElement } from 'react';
import './index.css'
import Header from '../../component/header'
import { Image, Descriptions, Space, Rate, Card, Button, Tooltip, List, Comment, Avatar } from 'antd';
import imagesMap from '../../constants/images-map'
import { LikeOutlined, LikeFilled } from '@ant-design/icons';

const data = [
  {
    user : 'user1',
    rating : 3,
    content : 'Good',
    likes : 0
  },
  {
    user : 'user2',
    rating : 1,
    content : 'Good',
    likes : 1
  }
];

export default class MovieDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    addLikes(num) {
        console.log(num)
    }


    render() {

        console.log(this.props.location.state.movie_info)

        return (

            <div className="movie-page">

                <div className="movie-name">
                    movie_name
                </div>

                <br/>

                <div>
                    <Space size={50}>
                        <Image height={280} width={200} src={imagesMap.rango}/>
                        <Descriptions bordered size={"small"} column={1}>
                            <Descriptions.Item label="Director">director</Descriptions.Item>
                            <Descriptions.Item label="Actor">leading_actor</Descriptions.Item>
                            <Descriptions.Item label="Type"><a href="">category</a></Descriptions.Item>
                            <Descriptions.Item label="Country of Production">country_of_production</Descriptions.Item>
                            <Descriptions.Item label="Language">language</Descriptions.Item>
                            <Descriptions.Item label="Release Date">release_date</Descriptions.Item>
                            <Descriptions.Item label="Length">length</Descriptions.Item>
                            <Descriptions.Item label="Rating">
                                <Space>
                                    rating
                                    <Rate disabled defaultValue={3}/>
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
                        <p>introduction</p>
                    </Card>
                </div>

                <br/>

                <div className="review-header">
                    Reviews ( {data.length} )
                </div>

                <div>
                    <List
                        className="comment-list"
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
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
                                        author={item.user}
                                        content={item.content}
                                        actions={[
                                            <Tooltip key="comment-like" title="Like">
                    <span>
                      {/* 未实现点赞功能 onClick=... */}
                        {createElement(item.action === 'liked' ? LikeFilled : LikeOutlined)}
                        <span className="comment-action">{item.likes}</span>
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

                <Button className="add-review-button" type="primary" href="/add-review">
                    + Review
                </Button>

            </div>
        )
    }
}