import React from "react";
import { Table, Button, Space } from "antd";
import { useGetProducts } from "../../apis/product";
import { parseCurrency } from "../../services/index";

const Example = () => {
  const [products, isLoading] = useGetProducts();
  console.log(products);
  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "NAME",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "PRICE",
      dataIndex: "price",
      key: "price",
      render: (detail, record) => <p>{parseCurrency(record.price)}</p>,
    },
    {
      title: "IMAGE",
      dataIndex: "img1",
      key: "img1",
      render: (detail, record) => (
        <img src={record.img1} style={{ width: "100px" }} />
      ),
    },
    {
      title: "CATEGORY",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "EDIT",
      dataIndex: "edit",
      key: "edit",
      render: (detail, record) => (
        <Space>
          <Button type="primary" primary>
            Update
          </Button>
          <Button type="primary" danger>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div>
        <Table
          bordered
          scroll={{ x: true }}
          columns={columns}
          dataSource={products}
          title={() => (
            <>
              <h5>Products</h5>
              <input placeholder="Enter Search!" />
            </>
          )}
        />
      </div>
    </>
  );
};

export default Example;
