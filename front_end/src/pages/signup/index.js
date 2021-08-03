import React, { Component } from 'react';
import './index.css'
import { Input, Button } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

export default class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


  render() {
    return (
      <div className='signup'>

        <div className='signupHeader'>
          <br />
          <p>Sign up for a new account</p>
        </div>

        <Input
        size="large"
        placeholder="User ID"
        prefix={<UserOutlined />}
        />
        <br />
        <br />
        <Input
        size="large"
        placeholder="Email"
        prefix={<MailOutlined />}
        />
        <br />
        <br />
        <Input.Password
        size="large"
        placeholder="Password"
        prefix={<LockOutlined />}
        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
        <br />
        <br />
        <Input.Password
        size="large"
        placeholder="Re-enter password"
        prefix={<LockOutlined />}
        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
        <br />
        <br />

        <Button type="primary" size='large' block>Register</Button>
        <br />
        <br />

        <p>
          Already have an account?
          <Button type="link">Sign in.</Button>
        </p>

      </div>
    );
  }
}