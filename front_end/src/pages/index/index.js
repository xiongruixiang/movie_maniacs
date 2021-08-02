import React, { Component } from 'react';
import './index.css'
import { Button } from 'antd';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


  render() {
    return (
      <div className='homepage'>
          <p>Homepage</p>
          <Button type="primary">Button</Button>
      </div>
    );
  }
}