import React, { Component } from 'react';
import $ from 'jquery';
import './index.css'

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            res: "",
        }
    }

    get(){
        var url="http://127.0.0.1:8000/api/message/"
        $.get(url, (result) => {
            this.setState({
                res: result
            })
        })
    }

  render() {
    var res = this.state.res
    return (
      <div>
        <button className='btn' onClick={() => this.get()}> GET </button>
        <br />
        <p className='message'> result:  { res }</p>
      </div>
    );
  }
}