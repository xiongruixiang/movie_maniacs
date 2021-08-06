import React, { Component } from 'react';
import './index.css'
import { PageHeader } from 'antd';
import { Select } from 'antd';
import { DatePicker, Space } from 'antd';
import { Input } from 'antd';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'|| file.type === 'image/jpg';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

class Avatar extends React.Component {
  state = {
    loading: false,
  };

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  render() {
    const { loading, imageUrl } = this.state;
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    );
  }
}

const { TextArea } = Input;

function onChange1(date, dateString) {
  console.log(date, dateString);
}

const { Option } = Select;
function onChange(value) {
  console.log(`selected ${value}`);
}
function onBlur() {
  console.log('blur');
}
function onFocus() {
  console.log('focus');
}
function onSearch(val) {
  console.log('search:', val);
}

export default class AddMovie extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


  render() {

    return (
      <html>
      <div class="titleAddMovie">
          Add Movie ADMIN ONLY
      </div>

      <PageHeader
      className="site-page-header"
      onBack={() => window.history.back()}
      title="Back"/>

      {/* action添加服务器 */}
      <form action=" " method="get">
            
            <table class="t">           
                <tr> 
                  <div class="name">                     
                    <td>name: </td>
                    <td>
                    <Input placeholder="Movie name" />
                        {/* <!--<input type="text" name="userid" value="" placeholder="登录名"/>--> */}
                        {/* <input type="text" name="user" value=""/> */}
                    </td> 
                    &nbsp; 
                    <td>Actor: </td>
                    <td>
                    <Input placeholder="Actor" />
                        {/* <input type="text" name="actor" value=""/> */}
                    </td> 
                    &nbsp;
                    <td>Director: </td>
                    <td>
                    <Input placeholder="Director" />
                        {/* <input type="text" name="director" value=""/> */}
                    </td> 
                    &nbsp;
                    <td>Type: </td>
                    <td>
                    <Select
                      showSearch
                      style={{ width: 200 }}
                      placeholder="Select a type"
                      optionFilterProp="children"
                      onChange={onChange}
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onSearch={onSearch}
                      filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="Comedy">Comedy</Option>
                      <Option value="Thriller">Thriller</Option>
                      <Option value="Romance">Romance</Option>
                      <Option value="Horror">Horror</Option>
                      <Option value="Action">Action</Option>
                      <Option value="Crime">Crime</Option>
                    </Select>
                    </td> 
                    &nbsp;
                    <td>Country Of Production: </td>
                    <td>
                    <Input placeholder="Country" />
                        {/* <input type="text" name="country" value=""/> */}
                    </td> 
                    &nbsp;
                    <td>Language: </td>
                    <td>
                    <Input placeholder="Language" />
                        {/* <input type="text" name="language" value=""/> */}
                    </td> 
                    &nbsp;
                    <td>Release Data: </td>
                    <td>
                    <Space direction="vertical">
                    <DatePicker onChange={onChange1} />
                    </Space>

                    </td> 
                    &nbsp;
                    <td>Length: </td>
                    <td>
                    <Input placeholder="Length" />
                        {/* <input type="text" name="length" value=""/> */}
                    </td> 
                    &nbsp;
                    <td> Introduction: </td>
                    <td>
                    <TextArea rows={4} />
                    </td> 
                    &nbsp;

                    </div>      
                </tr>
                <div class="uploadPhoto">
                  <Avatar />
                </div>

            </table>

        </form>

        <div class="addMovie">
            <form id="add_page_form" method="post" action="{% url 'rango:add_movie' category.slug %}"> 
                <input type="submit" name="submit" value="Add Movie" />
             </form>
        </div>

      </html>
    );
  }
}

