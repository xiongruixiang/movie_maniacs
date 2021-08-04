import React, { Component } from 'react';
import './index.css'
import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    onFinish = (values) => {
      console.log(values);
    };

  render() {
    return (

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
        name="email"
        rules={[{ required: true, message: 'Please enter your Email!' }]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>

        <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please enter your Password!' }]}
        >
          <Input.Password
          // type="password"
          prefix={<LockOutlined />}
          placeholder="Password"
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        </Form.Item>

        <Form.Item>
          <a className="forgot-password" href="">
            Forgot your password?
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-button">
            Log in
          </Button>
        </Form.Item>

        <Form.Item className="login-signup">
          Don't have an account? <a href="/signup">Sign up.</a>
        </Form.Item>

      </Form>

    //   <div className='login'>

    //     <div className='login-header'>
    //       <br/>
    //       <p>Log in</p>
    //     </div>

    //     <Input placeholder="Email" prefix={<MailOutlined />} />
    //     <br/><br/>

    //     <Input.Password
    //     placeholder="Password"
    //     prefix={<LockOutlined />}
    //     iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    //     />

    //     <div className='forget-password-link'>
    //       <Button type="link">Forget your password?</Button>
    //       <br/><br/>
    //     </div>

    //     <Button type="primary" block>Log in</Button>
    //     <br/><br/>

    //     <div>
    //       Don't have an account?
    //       <Button type="link">Sign up.</Button>
    //     </div>

    // </div>
    );
  }
}