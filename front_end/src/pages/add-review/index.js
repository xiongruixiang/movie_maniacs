import React, {Component} from 'react';
import './index.css'
import {Form, Space, Rate, Input, Button, Select} from 'antd';
import Header from "../../component/header";
import $ from 'jquery'

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const {Option} = Select;

export default class AddReview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            message: 'Please select a rating',
            showMessage: false
        }
    }


    onFinish = (values) => {
        let username = localStorage.getItem('username')
        if (username) {
            if (this.state.value === 0) {
                this.setState({
                    showMessage: true
                })
            } else {
                let {movie_name} = this.props.location.state
                let url = 'http://127.0.0.1:8000/api/movie/' + movie_name + '/add-review/'
                let params = {
                    content: values.movie.review,
                    username: username,
                    rating: this.state.value
                }
                $.post(url, params, (result) => {
                    this.props.history.push({
                        pathname: '/movie/' + movie_name + '/',
                        state: {
                            movie_name_slug: movie_name
                        }
                    })
                })
            }
        }
    };


    handleChange = value => {
        this.setState({value});
    };

    render() {

        const {value, showMessage, message} = this.state;

        return (
            <div>
                <Header/>
                <Form
                    name="addReview"
                    className="add-review"
                    onFinish={this.onFinish}
                >

                    <br/>
                    <div className="add-rate-header">
                        Rating
                        {showMessage && <span>{message}</span>}
                    </div>

                    <Form.Item
                        name={['movie', 'rating']}
                    >
                        <Space>
                            <Rate tooltips={desc} onChange={this.handleChange} value={value}/>
                            {value ? desc[value - 1] : ''}
                        </Space>
                    </Form.Item>

                    <div className="add-review-header">
                        Review
                    </div>

                    <Form.Item
                        name={['movie', 'review']}
                        rules={[{required: true, message: 'Review cannot be empty!'}]}
                    >
                        <Input.TextArea rows={10} placeholder="Write a review..."/>
                    </Form.Item>

                    <Form.Item className="add-review-button">
                        <Space>
                            <Button type="primary" htmlType="submit" className='submit-btn'>
                                Submit
                            </Button>
                        </Space>
                    </Form.Item>

                </Form>
            </div>
        );
    }
}