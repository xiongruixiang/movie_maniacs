import React, { Component } from 'react';
import './index.css'
import { Input, Button } from 'antd';
import { MailOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


  render() {
    return (
      <div className='login'>

        <div className='loginHeader'>
          <br />
          <p>Log in</p>
        </div>

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

        <div className='forgetPassword'>
          <Button type="link">Forget your password?</Button>
          <br />
          <br />
        </div>

        <Button type="primary" size='large' block>Log in</Button>
        <br />
        <br />

        <p>
          Don't have an account?
          <Button type="link">Sign up.</Button>
        </p>

      </div>
    );
  }
}