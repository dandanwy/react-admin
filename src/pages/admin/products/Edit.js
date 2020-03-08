import React from 'react'
import { Form, Card, Input, Button, message } from 'antd'

function Edit(props) {
    const { getFieldDecorator } = props.form;
    const handleSubmit = e => {
        console.log(e);
        e.preventDefault();
        props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
              console.log('提交');
            } else {
                message.warning('请输入商品名称');
            }
        });
    }
    return (
        <Card title="商品编辑">
            <Form onSubmit={e => handleSubmit(e)}>
                <Form.Item label="名字">
                    {getFieldDecorator('name', {
                        rules: [
                            {
                                required: true,
                                message: '请输入名字',
                            }
                        ]
                    })(<Input placeholder="请输入商品名称"></Input>)}
                </Form.Item>
                <Form.Item label="价格">
                    {getFieldDecorator('price', {
                        rules: [
                            {
                                required: true,
                                message: '请输入商品价格',
                            }
                        ]
                    })(<Input placeholder="请输入商品价格"></Input>)}
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" type="primary">保存</Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Form.create({ name: 'productsEdit' })(Edit);
