import React from "react";
import { Card, Table, Button, Popconfirm } from "antd";

const dataSource = [
  {
    id: 1,
    name: "香皂",
    price: 5,
  },
  {
    id: 2,
    name: "衣服",
    price: 9,
  },
  {
    id: 3,
    name: "香皂",
    price: 5,
  },
];

function List(props) {
  const columns = [
    {
      title: "序号",
      key: "id",
      width: 80,
      aligin: "center",
      render: (txt, record, index) => index + 1,
    },
    {
      title: "名字",
      dataIndex: "name",
    },
    {
      title: "价格",
      dataIndex: "price",
    },
    {
      title: "操作",
      render: (txt, record, index) => {
        return (
          <div>
            <Button type='primary' size='small'>
              修改
            </Button>
            <Popconfirm
              title='确定删除改行商品信息吗？'
              onCancel={() => console.log("用户取消删除操作")}
              onConfirm={() => console.log("用户确认删除")}
              //调用api接口进行相关操作
            >
              <Button style={{ margin: "0 1rem" }} type='danger' size='small'>
                删除
              </Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  return (
    <Card
      title='商品列表'
      extra={
        <Button
          type='primary'
          size='small'
          onClick={() => props.history.push("/admin/edit/edit")}
        >
          新增
        </Button>
      }
    >
      <Table columns={columns} bordered dataSource={dataSource} />
    </Card>
  );
}

export default List;
