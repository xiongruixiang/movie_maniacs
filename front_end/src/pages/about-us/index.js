import React, { Component } from 'react';
import './index.css'
import Header from "../../component/header";

export default class About extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


  render() {
    return (
      <html>
      <Header />
      <div class="titleAboutUs">
          ABOUT US
      </div>
      <br/><br/>
      <div class="teamName">

          <h>Team Name: Hello World</h>
      </div>

      <div class="email">
      <p>Email: <br/></p>
        Ruixiang Xiong: 2540725X@student.gla.ac.uk<br/>
        Yuanchao Li: 2538656L@student.gla.ac.uk<br/>
        Cheng Feng: 2537912F@student.gla.ac.uk<br/>
        Yadi Tian: 2546988T@student.gla.ac.uk<br/>
      </div>

      <div class="contact">
          If you have any questions, please do not hesitate to contact us!
      </div>

      </html>
    );
  }
}