import React from "react";
import { Form, Input, Button, Checkbox, message } from "antd";

function Edit(props) {
  const priceValidate = (rule, value, callback) => {
    if (value * 1 > 100) {
      callback("价格不能大于100");
    } else {
      callback();
    }
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      {...layout}
      name='basic'
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label='商品名称'
        name='name'
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input placeholder='input placeholder1' />
      </Form.Item>

      <Form.Item
        label='商品数量'
        name='number'
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input placeholder='input placeholder2' />
      </Form.Item>

      <Form.Item
        label='商品价格'
        name='price'
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
          {
            validator: priceValidate,
          },
        ]}
      >
        <Input placeholder='input placeholder3' />
      </Form.Item>

      <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Edit;
