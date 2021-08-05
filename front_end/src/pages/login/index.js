import React, {Component} from 'react';
import './index.css'
import {Form, Input, Button} from 'antd';
import {MailOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import $ from 'jquery'
import Header from "../../component/header";

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showMessage: false,
            message: ''
        }
    }


    onFinish = (values) => {
        let url = 'http://127.0.0.1:8000/api/login/'
        $.post(url, values, (result) => {
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

    goToSignupPage() {
        this.props.history.push('/signup')
    }

    render() {
        let {message, showMessage} = this.state
        return (

            <div>
                <Header/>
                <Form
                    name="login"
                    className="login"
                    onFinish={this.onFinish}
                >

                    <Form.Item className="login-header">
                        <br/>
                        Log in
                    </Form.Item>

                    <Form.Item
                        name="username"
                        rules={[{required: true, message: 'Please enter your Email!'}]}
                    >
                        <Input prefix={<MailOutlined/>} placeholder="Username"/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{required: true, message: 'Please enter your Password!'}]}
                    >
                        <Input.Password
                            // type="password"
                            prefix={<LockOutlined/>}
                            placeholder="Password"
                            iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                        />
                    </Form.Item>

                    {showMessage && (
                        <Form.Item className='show-message'>
                            <p>{message}</p>
                        </Form.Item>
                    )}

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-button">
                            Log in
                        </Button>
                    </Form.Item>

                    <Form.Item className="login-signup">
                        No account? <a onClick={() => this.goToSignupPage()}>Sign up</a>
                    </Form.Item>

                </Form>
            </div>
        );
    }
}