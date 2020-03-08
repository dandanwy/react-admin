import React from 'react'
import { Card, Button, Table } from 'antd';

function List(props) {
    const dataSource = [
        {
            id: 1,
            name: '苹果',
            price: '6'
        },
        {
            id: 2,
            name: '香蕉',
            price: '3'
        }
    ];
    const columns = [
        {
          title: '序号',
          key: 'id',
          render: (text, record, index) => index + 1
        },
        {
          title: '名字',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '价格',
          dataIndex: 'price',
          key: 'price',
        },
        {
            title: '操作',
            render: (text, record, index) => {
                return (
                    <div>
                        <Button size="small" type="primary">修改</Button>
                        <Button size="small" type="danger">删除</Button>
                    </div>
                )
            }
        }
    ];
    return (
        <div>
            <Card title="商品列表" extra={ <Button type="primary" onClick={() => {props.history.push('/admin/products/edit')}}>新增</Button> }>
                <Table dataSource={dataSource} columns={columns} />;
            </Card>
        </div>
    )
}

export default List
