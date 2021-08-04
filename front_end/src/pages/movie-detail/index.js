import React, { Component } from 'react';
import './index.css'
import Header from '../../component/header'

export default class MovieDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


  render() {
        console.log(this.props.location.state.movie_info)
        return (
          <div>
              <Header />
          </div>
        );
  }
}