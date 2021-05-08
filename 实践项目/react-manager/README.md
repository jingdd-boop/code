# 1

技术栈 react antd axios
搭建目录结构，初始化项目

yarn add antd
yarn add react-router-dom

目录结构：

- admin
- login

# 2

1. 完成基本路由配置，
2. 引入了 antd 组件库，实现基本页面布局
3. 使用 filter 过滤需要在页面侧边栏直接显示的路由 title

# 3

1. antd 的 icon 引入
2. 点击侧边菜单实现跳转
3. Card Table 组件使用

# 4

解决嵌套路由匹配问题
这是匹配 list 和 edit 的路由，但`/admin/products`可以匹配 List `path: "/admin/products/list",`匹配失败，下面的编辑页也是这样。

点击按钮跳转 url 变了，但是页面没有渲染 react

```js
{
    path: "/admin/products/list",
    component: List,
    isShow: true,
    title: "商品管理",
    icon: <SkinOutlined />,
  },
  {
    path: "/admin/products/edit",
    component: Edit,
    isShow: false,
  },
```

之后解决方案，是直接把 edit 组件放到 edit 文件夹下面

```js
{
    path: "/admin/edit/edit",
    component: Edit,
    isShow: true,
    title: "添加商品",
    icon: <SkinOutlined />,
  },
```

# 5

完成编辑页面的表单，以及一些验证

```js
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
```

页面：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210508081143423.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1Njc4NjA3,size_16,color_FFFFFF,t_70)

点击提交按钮

可以使用 antd 自带的
Form 是的两个方法 onFinish onFinishFailed

```js
const onFinish = (values) => {
  console.log("Success:", values);
  //调用api接口完成登录验证
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

<Form
    {...layout}
    name='basic'
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210508083746800.png)
