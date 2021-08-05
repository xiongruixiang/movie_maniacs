import React, { Component } from 'react';
import './index.css'
import { Form, Space, Rate, Input, Button } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

export default class AddReview extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    // formRef = React.createRef();
    onFinish = (values) => {
      console.log(values);
    };
    // onReset = () => {
    //   this.formRef.current.resetFields();
    // };

    handleChange = value => {
      this.setState({ value });
    };

  render() {

    const { value } = this.state;

    return (

      <Form
      // ref={this.formRef}
      name="addReview"
      className="add-review"
      onFinish={this.onFinish}
      >

        <br/>
        <div className="add-rate-header">
          Rating
        </div>

        <Form.Item
        name={['movie', 'rate']}
        >
          <Space>
            <Rate tooltips={desc} onChange={this.handleChange} value={value} />
            {value ? desc[value - 1] : ''}
          </Space>
        </Form.Item>

        <div className="add-review-header">
          Review
        </div>

        <Form.Item
        name={['movie', 'review']}
        rules={[{ required: true, message: 'Review cannot be empty!' }]}
        >
          <Input.TextArea rows={10} placeholder="Write a review..." />
        </Form.Item>

        <Form.Item className="add-review-button">
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" href="/movie-detail">
              Cancel
            </Button>
          </Space>
        </Form.Item>

      </Form>

      // <div className='add-review'>

      //   <div className='add-review-header'>
      //     <br/>
      //     <Space>
      //       Rating
      //       <Rate tooltips={desc} onChange={this.handleChange} value={value} />
      //       {value ? desc[value - 1] : ''}
      //     </Space>
      //     <br/>
      //     Review
      //   </div>

      //   <TextArea rows={10} placeholder="Write a review..." />

      //   <div className='add-review-button'>
      //     <br/>
      //     <Space size="large">
      //       <Button type="primary">Submit</Button>
      //       <Button type="primary">Cancel</Button>
      //     </Space>
      //   </div>

      // </div>
    );
  }
}