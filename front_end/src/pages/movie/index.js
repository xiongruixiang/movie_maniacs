import React, { Component } from 'react';
import './index.css'
import Review from "../../component/review";

export default class Movie extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


  render() {
    return (
      <div>
          Movie page
          <Review />
      </div>
    );
  }
}