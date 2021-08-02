import React, { Component } from 'react';
import './index.css'
import { Button } from 'antd';
import imagesMap from '../../constants/images-map'

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
          <br />
          <br />
          <img src={imagesMap.rango} alt='rango'/>
      </div>
    );
  }
}