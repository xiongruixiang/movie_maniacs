import React, {Component} from 'react';
import './index.css'
import {Form, Input, Button} from 'antd';
import {UserOutlined, MailOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import $ from 'jquery'
import Header from "../../component/header";

export default class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            showMessage: false
        }
    }


    onFinish = (values) => {
        let url = 'http://127.0.0.1:8000/api/signup/'
        let params = {
            username: values.username,
            password: values.password,
            email: values.email
        }
        $.post(url, params, (result) => {
            console.log(result)
            if (result.status === 200) {
                localStorage.setItem('username', values.username)
                localStorage.setItem('token', result.token)
                this.props.history.push('/')
            } else if (result.status === 'failed') {
                this.setState({
                    message: result.message,
                    showMessage: true
                })
            }
        })
    };

    goToLoginPage() {
        this.props.history.push('/login')
    }

    render() {
        let {showMessage, message} = this.state
        return (
            <div>
                <Header/>
                <Form
                    name="signup"
                    className="signup"
                    onFinish={this.onFinish}
                    layout="vertical"
                >

                    <Form.Item className="signup-header">
                        <br/>
                        Sign up
                    </Form.Item>

                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{required: true, message: 'Please enter your User ID!'}]}
                    >
                        <Input prefix={<UserOutlined/>}/>
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {required: true, message: 'Please enter your Email!'},
                            {type: 'email', message: 'The Email is not valid!'}
                        ]}
                    >
                        <Input prefix={<MailOutlined/>}/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        hasFeedback
                        rules={[{required: true, message: 'Please enter your Password!'}]}
                    >
                        <Input.Password
                            prefix={<LockOutlined/>}
                            iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Re-enter password"
                        name="reEnter"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {required: true, message: 'Please re-enter your Password!'},
                            ({getFieldValue}) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') == value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords you entered do not match!'));
                                }
                            })
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined/>}
                            iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                        />
                    </Form.Item>

                    {showMessage && (
                        <Form.Item className='show-message'>
                            <p>{message}</p>
                        </Form.Item>
                    )}

                    <Form.Item>
                        <br/>
                        <Button type="primary" htmlType="submit" className="signup-button">
                            Sign up
                        </Button>
                    </Form.Item>

                    <Form.Item className="signup-login">
                        Already have an account? <a onClick={() => this.goToLoginPage()}>Log in.</a>
                    </Form.Item>

                </Form>
            </div>
        );
    }
}