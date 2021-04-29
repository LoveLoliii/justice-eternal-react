import React, { Component } from "react"
import { GetPostList } from '../../services/post';
import { Button, Table, Tag, Space } from 'antd';

const columns = [
    {
        title: 'floor',
        dataIndex: 'floor',
        // sorter: true,
        // render: name => `${name.first} ${name.last}`,
        width: '10%',
    },
    {
        title: 'author',
        dataIndex: 'author',
        width: '20%',
    },
    {
        title: 'content',
        dataIndex: 'content',
        width: '40%',
    },
    {
        title: 'time',
        dataIndex: 'time',
        width: '10%',
    },
    {
        title: 'Action',
        width: '20%',
        render: (text, record) => {
            console.log(record)
            const id = record.id;
            return (
                <Space size="middle">
                    <a href={'/comment?id=' + id}>详情</a>
                </Space>
            );
        }
    }

]

console.log("post live")

class Post extends Component {

    state = {
        title: '',
        thread_id: 0,
        data: [],
        pagination: {
            currentPage: 1,
            pageSize: 10,
        },
        loading: false,
    };
    componentDidMount() {
        console.log(this.props);
        this.state.thread_id = this.props.match.params.id;
        this.state.title = this.props.match.params.title
        this.fetch()
    }



    fetch = (params = {}) => {
        this.setState({ loading: true });
        const { pagination } = params
        let data = pagination ? { currentPage: pagination.current, pageSize: pagination.pageSize } : this.state.pagination
        data.thread_id = this.state.thread_id;
        console.log(data);
        GetPostList(data).then(e => {
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
            ...filters,
        });
    };

    render() {
        return (
            <div className="Post">
                {/* <Button type="primary" onClick={() => this.fetch()}>get List</Button> */}
                <h1>{this.state.title}</h1>

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
export default Post