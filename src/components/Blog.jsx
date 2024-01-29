import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import Post from './Post';
import shuba from '../images/shuba.gif';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [form] = Form.useForm();
    const { TextArea } = Input;

    const onFinish = (values) => {
        setPosts([...posts, {title: values.title, content: values.content}]);
        form.resetFields();
    };
    return (
        <div
            style={{
                backgroundImage: `url(${shuba})`,
                height: "100vh",
            }}
        >
            <Form
                form={form}
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        {
                        required: true,
                        message: 'enter blog title',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Content"
                    name="content"
                    rules={[
                        {
                        required: true,
                        message: 'enter blog content',
                        },
                    ]}
                >
                    <TextArea rows={4} />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

            {posts.map((item, index) => {
                return <Post key={index} title={item.title} content={item.content} />
            })}
        </div>
    )

}

export default Blog;