import React, { Component } from 'react'
import { Button, Col, Row, Statistic,Divider ,Menu } from 'antd';
import { GetThreadList } from '../../services/thread';
import { AddVisitCount } from '../../services/je';
import { Table, Tag, Space, Input, Select } from 'antd';
import Highlighter from 'react-highlight-words';
import { SettingOutlined,AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import './thread-c.css'
import logo from '../../llf-logo.svg';
//const { Column, ColumnGroup } = Table;
const { Search } = Input;
const { SubMenu } = Menu;
const columns = [
  {
    title: '标题',
    dataIndex: 'title',
    // sorter: true,
    // render: name => `${name.first} ${name.last}`,
    width: '40%',
  },
  {
    title: '作者',
    dataIndex: 'author',
    width: '20%',
  },
  {
    title: '回复数',
    dataIndex: 'reply_num',
    width: '10%',
  },
  {
    title: 'good',
    dataIndex: 'good',
    width: '10%',
  },
  {
    title: '操作',
    width: '20%',
    render: (text, record) => {
      const id = record.id;
      const title = record.title;
      return (
        <Space size="middle">
          <Link to={'/post/' + id + '/' + title}>详情</Link>
          {/* <a href={'/post/'+id+'/'+title}>详情</a> */}
        </Space>
      );
    }
  }

]

//console.log("thread live")
class ThreadC extends Component {
  onSearch = value =>{
    this.setState({title:value})
    console.log(value);
    this.fetch({
      title:value
    });
   
  } 
  componentDidMount() {
    this.fetch()
    this.getVisitCount()
  }

  

  state = {
    data: [],
    pagination: {
      currentPage: 1,
      pageSize: 10,
    },
    loading: false,
  };

  getVisitCount = (p= {} ) =>{
    AddVisitCount().then(e=>{
      console.log(e.data)
      this.setState({
        counts : e.data.counts
      })
    })
  }

  fetch = (params = {}) => {
    this.setState({ loading: true });
    const { pagination } = params
    let data = pagination ? { currentPage: pagination.current, pageSize: pagination.pageSize } : this.state.pagination
    if(params.title)data.title =params.title
    console.log(data)
    GetThreadList(data).then(e => {
      this.setState({
        data: e.data.list,
        loading: false,
        pagination: {
          total: e.data.pagination.total,
          pageSize: e.data.pagination.pageSize,
          currentPage: e.data.pagination.currentPage
        }
      })
    })

  }


  handleTableChange = (pagination, filters, sorter) => {
    this.fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      title:this.state.title,
      ...filters,
    });
  };

  render() {
    return (
      <div className="Thread">
        <Row justify='center' align="middle" style={{ minHeight: '10vh', boxShadow: '0 2px 8px #f0f1f2' }}  >
          <Col span={4} align="middle">
           <h1><a id="logo" href="/"><img height='64px' alt="logo" src={logo}/>Loli Monster</a></h1>
        </Col>
          <Col span={18}>
            <Row>
              <Col span={8}>
                <Search placeholder="在je.loli.monster中搜索" onSearch={this.onSearch} enterButton />
              </Col>
              <Col span={16}>d</Col>
            </Row>
          </Col>
          <Col span={2}>
            <Statistic title="访问次数" value={this.state.counts} />
          </Col>
        </Row>
        <Row style={{    padding: '40px 0 0'}}>
          <Col span={4}>
          <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
          </Col>
          
          <Col span={18}>

            {/* <Button type="primary" onClick={() => this.fetch()}>get List</Button> */}
            <h1>帖子列表</h1>

            <Table
              columns={columns}
              rowKey={this.state.data.id}
              dataSource={this.state.data}
              pagination={this.state.pagination}
              loading={this.state.loading}
              onChange={this.handleTableChange}
            />
          </Col>
          <Col span={2}>
            
        </Col>
        </Row>
      </div>
    )
  }
}

export default ThreadC
