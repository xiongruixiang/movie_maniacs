import React, { Component } from 'react';
import './index.css'
import { Form, Input, Button } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

export default class Signup extends Component {

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
        label="User ID"
        name="userID"
        rules={[{ required: true, message: 'Please enter your User ID!' }]}
        >
          <Input prefix={<UserOutlined />} />
        </Form.Item>

        <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please enter your Email!' },
          { type: 'email', message: 'The Email is not valid!' }
        ]}
        >
          <Input prefix={<MailOutlined />} />
        </Form.Item>

        <Form.Item
        label="Password"
        name="password"
        hasFeedback
        rules={[{ required: true, message: 'Please enter your Password!' }]}
        >
          <Input.Password
          prefix={<LockOutlined />}
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        </Form.Item>

        <Form.Item
        label="Re-enter password"
        name="reEnter"
        dependencies={['password']}
        hasFeedback
        rules={[
          { required: true, message: 'Please re-enter your Password!' },
          ({ getFieldValue }) => ({
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
          prefix={<LockOutlined />}
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        </Form.Item>

        <Form.Item>
          <br/>
          <Button type="primary" htmlType="submit" className="signup-button">
            Sign up
          </Button>
        </Form.Item>

        <Form.Item className="signup-login">
          Already have an account? <a href="/login">Log in.</a>
        </Form.Item>

      </Form>

      // <div className='signup'>

      //   <div className='signup-header'>
      //     <br/>
      //     <p>Sign up</p>
      //   </div>

      //   <Input placeholder="User ID" prefix={<UserOutlined />} />
      //   <br/><br/>

      //   <Input placeholder="Email" prefix={<MailOutlined />} />
      //   <br/><br/>

      //   <Input.Password
      //   placeholder="Password"
      //   prefix={<LockOutlined />}
      //   iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      //   />
      //   <br/><br/>

      //   <Input.Password
      //   placeholder="Re-enter password"
      //   prefix={<LockOutlined />}
      //   iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      //   />
      //   <br/><br/>

      //   <Button type="primary" block>Sign up</Button>
      //   <br/><br/>

      //   <div>
      //     Already have an account?
      //     <Button type="link">Log in.</Button>
      //   </div>

      // </div>
    );
  }
}