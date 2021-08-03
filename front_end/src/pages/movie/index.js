import React, { Component } from 'react';
import './index.css'
import Review from "../../component/review";
import { Tag } from 'antd';
import imagesMap from '../../constants/images-map'
import { Rate } from 'antd';
import { PageHeader } from 'antd';

export default class Movie extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


  render() {
    return (
      <html>

        {/* <Review /> */}
        <PageHeader
          className="site-page-header"
          onBack={() => window.history.back()}
          title="Back"/>
      <div class="MovieTitle">
          Recommendation Movie page
      </div>

      
    

      <div class="comedy">
          Comedy
      </div>
      <div class="comedy1">
          <img src={imagesMap.rango} height="300" width="200" alt='rango'/ >
          <div class="introduction1">
          Name:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Comedy</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">Introduction</a><br/>
          <Rate disabled defaultValue={5} />
          </div>
          </div>
          <div class="comedy2">
          <img src={imagesMap.rango} height="300" width="200" alt='rango'/ >
          <div class="introduction2">
          Name:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Comedy</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">Introduction</a><br/>
          <Rate disabled defaultValue={5} />
          </div>
          </div>
          <div class="comedy3">
          <img src={imagesMap.rango} height="300" width="200" alt='rango'/ >
          <div class="introduction3">
          Name:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Comedy</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">Introduction</a><br/>
          <Rate disabled defaultValue={5} />
          </div>
          </div>
          <div class="comedy4">
          <img src={imagesMap.rango} height="300" width="200" alt='rango'/ >
          <div class="introduction4">
          Name:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Comedy</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">Introduction</a><br/>
          <Rate disabled defaultValue={4} />
          </div>
          </div>
          <div class="comedy5">
          <img src={imagesMap.rango} height="300" width="200" alt='rango'/ >
          <div class="introduction4">
          Name:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Comedy</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">Introduction</a><br/>
          <Rate disabled defaultValue={4} />
          </div>
          </div>

          <div class="line1"><hr></hr></div>
          <div class="thriller">
          Thriller
          </div>
          <div class="thriller1">
          <img src={imagesMap.rango} height="300" width="200" alt='rango'/ >
          <div class="introduction1">
          Name:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Thriller</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">Introduction</a><br/>
          <Rate disabled defaultValue={5} />
          </div>
          </div>
          <div class="thriller2">
          <img src={imagesMap.rango} height="300" width="200" alt='rango'/ >
          <div class="introduction2">
          Name:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Thriller</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">Introduction</a><br/>
          <Rate disabled defaultValue={5} />
          </div>
          </div>
          <div class="thriller3">
          <img src={imagesMap.rango} height="300" width="200" alt='rango'/ >
          <div class="introduction3">
          Name:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Thriller</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">Introduction</a><br/>
          <Rate disabled defaultValue={5} />
          </div>
          </div>
          <div class="thriller4">
          <img src={imagesMap.rango} height="300" width="200" alt='rango'/ >
          <div class="introduction4">
          Name:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Thriller</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">Introduction</a><br/>
          <Rate disabled defaultValue={4} />
          </div>
          </div>
          <div class="thriller5">
          <img src={imagesMap.rango} height="300" width="200" alt='rango'/ >
          <div class="introduction4">
          Name:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Thriller</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">Introduction</a><br/>
          <Rate disabled defaultValue={4} />
          </div>
          </div>

          <div class="line2"><hr></hr></div>
          <div class="romance">
          Romance
          </div>
          <div class="romance1">
          <img src={imagesMap.rango} height="300" width="200" alt='rango'/ >
          <div class="introduction1">
          Name:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Romance</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">Introduction</a><br/>
          <Rate disabled defaultValue={5} />
          </div>
          </div>
          <div class="romance2">
          <img src={imagesMap.rango} height="300" width="200" alt='rango'/ >
          <div class="introduction2">
          Name:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Romance</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">Introduction</a><br/>
          <Rate disabled defaultValue={5} />
          </div>
          </div>
          <div class="romance3">
          <img src={imagesMap.rango} height="300" width="200" alt='rango'/ >
          <div class="introduction3">
          Name:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Romance</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">Introduction</a><br/>
          <Rate disabled defaultValue={5} />
          </div>
          </div>
          <div class="romance4">
          <img src={imagesMap.rango} height="300" width="200" alt='rango'/ >
          <div class="introduction4">
          Name:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Romance</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">Introduction</a><br/>
          <Rate disabled defaultValue={4} />
          </div>
          </div>
          <div class="romance5">
          <img src={imagesMap.rango} height="300" width="200" alt='rango'/ >
          <div class="introduction4">
          Name:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Romance</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">Introduction</a><br/>
          <Rate disabled defaultValue={4} />
          </div>
          </div>

          <div class="line3"><hr></hr></div>
          <div class="horror">
          Horror
          </div>
          <div class="horror1">
          <img src={imagesMap.rango} height="300" width="200" alt='rango'/ >
          <div class="introduction1">
          Name:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Horror</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">Introduction</a><br/>
          <Rate disabled defaultValue={5} />
          </div>
          </div>
          <div class="horror2">
          <img src={imagesMap.rango} height="300" width="200" alt='rango'/ >
          <div class="introduction2">
          Name:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Horror</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">Introduction</a><br/>
          <Rate disabled defaultValue={5} />
          </div>
          </div>
          <div class="horror3">
          <img src={imagesMap.rango} height="300" width="200" alt='rango'/ >
          <div class="introduction3">
          Name:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Horror</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">Introduction</a><br/>
          <Rate disabled defaultValue={5} />
          </div>
          </div>
          <div class="horror4">
          <img src={imagesMap.rango} height="300" width="200" alt='rango'/ >
          <div class="introduction4">
          Name:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Horror</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">Introduction</a><br/>
          <Rate disabled defaultValue={4} />
          </div>
          </div>
          <div class="horror5">
          <img src={imagesMap.rango} height="300" width="200" alt='rango'/ >
          <div class="introduction4">
          Name:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Horror</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">Introduction</a><br/>
          <Rate disabled defaultValue={4} />
          </div>
          </div>

          <div class="line4"><hr></hr></div>
          <div class="action">
          Action
          </div>
          <div class="action1">
          <img src={imagesMap.rango} height="300" width="200" alt='rango'/ >
          <div class="introduction1">
          Name:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Action</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">Introduction</a><br/>
          <Rate disabled defaultValue={5} />
          </div>
          </div>
          <div class="action2">
          <img src={imagesMap.rango} height="300" width="200" alt='rango'/ >
          <div class="introduction2">
          Name:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Action</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">Introduction</a><br/>
          <Rate disabled defaultValue={5} />
          </div>
          </div>
          <div class="action3">
          <img src={imagesMap.rango} height="300" width="200" alt='rango'/ >
          <div class="introduction3">
          Name:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Action</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">Introduction</a><br/>
          <Rate disabled defaultValue={5} />
          </div>
          </div>
          <div class="action4">
          <img src={imagesMap.rango} height="300" width="200" alt='rango'/ >
          <div class="introduction4">
          Name:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Action</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">Introduction</a><br/>
          <Rate disabled defaultValue={4} />
          </div>
          </div>
          <div class="action5">
          <img src={imagesMap.rango} height="300" width="200" alt='rango'/ >
          <div class="introduction4">
          Name:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Action</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">Introduction</a><br/>
          <Rate disabled defaultValue={4} />
          </div>
          </div>

          <div class="line5"><hr></hr></div>
          <div class="crime">
          Crime
          </div>
          <div class="crime1">
          <img src={imagesMap.rango} height="300" width="200" alt='rango'/ >
          <div class="introduction1">
          Name:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Crime</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">Introduction</a><br/>
          <Rate disabled defaultValue={5} />
          </div>
          </div>
          <div class="crime2">
          <img src={imagesMap.rango} height="300" width="200" alt='rango'/ >
          <div class="introduction2">
          Name:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Crime</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">Introduction</a><br/>
          <Rate disabled defaultValue={5} />
          </div>
          </div>
          <div class="crime3">
          <img src={imagesMap.rango} height="300" width="200" alt='rango'/ >
          <div class="introduction3">
          Name:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Crime</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">Introduction</a><br/>
          <Rate disabled defaultValue={5} />
          </div>
          </div>
          <div class="crime4">
          <img src={imagesMap.rango} height="300" width="200" alt='rango'/ >
          <div class="introduction4">
          Name:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Crime</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">Introduction</a><br/>
          <Rate disabled defaultValue={4} />
          </div>
          </div>
          <div class="crime5">
          <img src={imagesMap.rango} height="300" width="200" alt='rango'/ >
          <div class="introduction4">
          Name:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Crime</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">Introduction</a><br/>
          <Rate disabled defaultValue={4} />
          </div>
          </div>
      </html>
    );
  }
}