import React from "react";
import { useGetProducts } from "../../apis/product.js";
import { Table, Button, Space } from "antd";
import { parseCurrency } from "../../services/index.js";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice.js";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, isLoading, response, refetchProduct] = useGetProducts(1, 5);
  const [pageProduct, setPageProduct] = useState(1);
  const [limit, setLimit] = useState(5);
  const [search, setSearch] = useState("");
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (user && user.role !== "admin") {
      navigate("/unauthorized");
    }
  }, [user]);

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
      render: (detail, record) => <p>{parseCurrency(record?.price)}</p>,
    },
    {
      title: "IMAGE",
      dataIndex: "img1",
      key: "img1",
      render: (detail, record) => (
        <img src={record?.img1} style={{ width: "80px" }} />
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
          loading={isLoading}
          pagination={{
            pageSize: 5,
            total: response?.totalProducts,
            onChange: (page, pageSize) => {
              refetchProduct(page, pageSize, search);
              setPageProduct(page);
            },
          }}
          title={() => (
            <>
              <h3>Products</h3>
              <input
                placeholder="Enter Search!"
                onChange={(e) => {
                  refetchProduct(pageProduct, limit, search);
                  setSearch(e.target.value);
                }}
              />
            </>
          )}
        />
      </div>
    </>
  );
};

export default Products;
