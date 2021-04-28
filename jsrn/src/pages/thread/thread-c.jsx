import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { GetThreadList } from '../../services/thread';
import { Table, Tag, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

//const { Column, ColumnGroup } = Table;

const columns = [
  {
    title:'title',
    dataIndex: 'title',
    // sorter: true,
    // render: name => `${name.first} ${name.last}`,
    width: '40%',
  },
  {
    title:'author',
    dataIndex: 'author',
    width:'20%',
  },
  {
    title: 'reply_num',
    dataIndex: 'reply_num',
    width:'10%',
  },
  {
    title: 'good',
    dataIndex:'good',
    width: '10%',
  },
  {
    title: 'Action',
     
     dataIndex :'s',
     width:'20%',
  }

]
class Thread extends Component{
  state = {
    data: [],
    pagination: {
      currentPage: 1,
      pageSize: 10,
    },
    loading: false,
  };
  fetch=(params = {} ) =>{
    this.setState({ loading: true });
      const {pagination} = params
      let data = pagination?{currentPage:pagination.current,pageSize:pagination.pageSize}:this.state.pagination
      GetThreadList(data).then(e=>{
        this.setState({
          data:e.data.list,
          loading:false,
          pagination:{
            total:e.data.pagination.total,
            pageSize:e.data.pagination.pageSize,
            currentPage:e.data.pagination.currentPage
          }
        })
      })
     
  }
  
  
  handleTableChange = (pagination, filters, sorter) => {
    this.fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
  };
  
  render(){
    return (
    <div className="Thread">
      <Button type="primary" onClick={ () => this.fetch() }>get List</Button>
      <h1>get thread</h1>
      {/* <Link to='/'><Button>路由</Button></Link> */}
      <Table 
             columns={columns}
             rowKey={this.state.data.id}  
             dataSource={this.state.data}
             pagination={this.state.pagination}  
             loading={this.state.loading}
             onChange={this.handleTableChange}
      />
 

    </div>);
  } 
}

export default Thread
