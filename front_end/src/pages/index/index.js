import React, { Component } from 'react';
import './index.css'
import { Button } from 'antd';
import imagesMap from '../../constants/images-map'
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import { Rate } from 'antd';

function log(e) {
  console.log(e);
}

function preventDefault(e) {
  e.preventDefault();
  console.log('Clicked! But prevent default.');
}

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
const onSearch = value => console.log(value);

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


  render() {
    
    return (
      
      <html>
      
      <div className='title'>
          <h>Movie-Maniacs</h>
      </div>
          <br/>
          <div align ="center">
          <img src={imagesMap.rango} height="200" width="1000" alt='rango'/ >
          </div>
          
        <br/>
        <div class="SearchButton">
        <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
        </div>
          
        <div class="addMovieButton">
          {/* 管理员权限 */}
        {/* <Button type="link">add movies (admin only)</Button> */}
          {/* 普通用户 无权限 */}
        {/* <Button type="link" disabled>
        Link(disabled)
       </Button> */}
       <Button><a href="http://localhost:3000/add-movie">Add Movies (admin only)</a></Button>
        </div>

        <div class="login">
        
                {/* {% if user.is_authenticated %} */}
                    {/* <!-- Show these links when the user is logged in --> */}
                    <Button type="primary">Login/Signup</Button>
                    {/* <li><a href="{% url 'rango:restricted' %}">Restricted Page</a></li>
                    <li><a href="{% url 'rango:logout' %}">Logout</a></li> 
                    <li><a href="{% url 'rango:add_category' %}">Add New Category</a> */}
                {/* {% else %} */}
                    {/* <!-- Show these links when the user is NOT logged in --> */}
                    {/* <li><a href="{% url 'rango:register' %}">Sign Up</a></li>
                    <li><a href="{% url 'rango:login' %}">Login</a></li>  */}
                {/* {% endif %} */}
                    {/* <!-- Outside the conditional statements, ALWAYS show --> */}
                    
                    {/* </li> <li><a href="{% url 'rango:about' %}">About</a></li>
                    <li><a href="{% url 'rango:index' %}">Index</a></li> */}
          
          {/* 用户认证 */}
          {/* 
            {% if user.is_authenticated %} 
                howdy {{ user.username }}! Welcome to Movie-Maniacs!
            {% else %}
                hey there partner! Welcome to Movie-Maniacs!
            {% endif %}         
        */}
        </div>
        <body>
        <br/>
        <div class="line"> <hr></hr> </div>
        <div class= "smallTitle">
        <br/>
          Expolre what's streaming
          <br/><br/>
        </div>

        <div class="movie1">
          <img src={imagesMap.rango} height="200" width="150" alt='rango'/ >
          <div class="introduction1">
          Name:<br/>
          Actor:<br/>
          Date:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Comedy</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">introduction:</a>
          </div>
          </div>
          <div class="movie2">
          <img src={imagesMap.rango} height="200" width="150" alt='rango'/ >
          <div class="introduction2">  
          Name:<br/>
          Actor:<br/>
          Date:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Comedy</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">introduction:</a>
          </div>
          </div>
         
          <div class="movie3">
          <img src={imagesMap.rango} height="200" width="150" alt='rango'/ >
          <div class="introduction3">  
          Name:<br/>
          Actor:<br/>
          Date:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Comedy</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">introduction:</a>
          </div>
          </div>
          
          <div class="movie4">
          <img src={imagesMap.rango} height="200" width="150" alt='rango'/ >
          <div class="introduction4">  
          Name:<br/>
          Actor:<br/>
          Date:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Comedy</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">introduction:</a>
          
          </div>
          </div>
          <div class="movie5">
          <img src={imagesMap.rango} height="200" width="150" alt='rango'/ >
          <div class="introduction5">  
          Name:<br/>
          Actor:<br/>
          Date:<br/>
          Type: <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862">Comedy</a>
          </Tag><br/>
          {/* 电影简介的链接 */}
          <a href="https://github.com/ant-design/ant-design/issues/1862">introduction:</a>
          </div>
          </div>
          <div class="ReButton">
          <Button type="primary"><a href="http://localhost:3000/movie">Get more recommendations</a></Button>
          </div>

          <div class="line2"> <hr></hr> </div>
          
          <div class="picture">
          <img src={imagesMap.rango} height="400" width="200" alt='rango'/ >
          </div>

          <div class="category">  
          category
          <div>
          <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862"><em>Comedy</em></a>
          </Tag>
          <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862"><em>Thriller</em></a>
          </Tag>
          <br/>
          <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862"><em>Romance</em></a>
          </Tag>
          <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862"><em>Horror</em></a>
          </Tag>
          <br/>
          <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862"><em>Action</em></a>
          </Tag>
          <Tag>
           <a href="https://github.com/ant-design/ant-design/issues/1862"><em>Crime</em></a>
          </Tag>
          </div>
          </div>

          <div class="popular">
            The most popular<br/>
            <em>
              {/* 换电影链接 */}
            <a href="https://github.com/ant-design/ant-design/issues/1862">Movie name1</a>
            <Rate disabled defaultValue={5} />
            <br/>
            <a href="https://github.com/ant-design/ant-design/issues/1862">Movie name2</a>
            <Rate disabled defaultValue={5} />
            <br/>
            <a href="https://github.com/ant-design/ant-design/issues/1862">Movie name3</a>
            <Rate disabled defaultValue={4} />
            <br/>
            <a href="https://github.com/ant-design/ant-design/issues/1862">Movie name4</a>
            <Rate disabled defaultValue={4} />
            <br/>
            <a href="https://github.com/ant-design/ant-design/issues/1862">Movie name5</a>
            <Rate disabled defaultValue={4} />
            </em>
          </div>

          <div class="picture2">
          <img src={imagesMap.rango} height="400" width="500" alt='rango'/ >
          </div>

          <div class="about_us">
          <a href="http://localhost:3000/about-us">-About Us-</a>
          </div>

        </body> 
          
      </html>
      

    );
  }
}