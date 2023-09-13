import React, { useEffect, useState } from "react";
import { Card, Col, Row, Table, Button } from "antd";
import {
  UserAddOutlined,
  DollarOutlined,
  FileAddOutlined,
} from "@ant-design/icons";
import axiosInstance from "../../apis/axios";
import { parseCurrency } from "../../services";

const Dashboard = () => {
  const [pageHistory, setPageHistory] = useState(1);
  const [limitHistory, setLimitHistory] = useState(2);
  const [allOrders, setAllOrders] = useState([]);

  const columns = [
    {
      title: "ID User",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "Name",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "Phone",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Total",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (totalPrice, record) => {
        return <p>{parseCurrency(totalPrice)}</p>;
      },
    },
    {
      title: "Delivery",
      dataIndex: "delivery",
      key: "delivery",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Detail",
      dataIndex: "detail",
      key: "detail",
      render: () => <Button>View</Button>,
    },
  ];

  // const data = [
  //   {
  //     key: "1",
  //     _id: "asx",
  //     name: "John Brown",
  //     phoneNumber: 32,
  //     address: "New York No. 1 Lake Park",
  //     total: "5",
  //     delivery: "Chua van chuyen",
  //     status: "Chua thanh toan",
  //   },
  //   {
  //     key: "2",
  //     _id: "asx",
  //     name: "John Brown",
  //     phoneNumber: 32,
  //     address: "New York No. 1 Lake Park",
  //     total: "5",
  //     delivery: "Chua van chuyen",
  //     status: "Chua thanh toan",
  //   },
  //   {
  //     key: "3",
  //     _id: "asx",
  //     name: "John Brown",
  //     phoneNumber: 32,
  //     address: "New York No. 1 Lake Park",
  //     total: "5",
  //     delivery: "Chua van chuyen",
  //     status: "Chua thanh toan",
  //   },
  // ];

  const fetchAllOrders = async (page, limit) => {
    const result = await axiosInstance.get("get-all-orders", {
      params: {
        page,
        limit,
      },
    });
    // console.log(result.data);
    setAllOrders(result.data);
  };

  useEffect(() => {
    fetchAllOrders(pageHistory, limitHistory);
  }, [pageHistory]);

  return (
    <>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Row type="flex" justify="space-between" align="middle">
              <Col span={2}>
                <h2>2</h2>
                <p>Clients</p>
              </Col>
              <Col span={2}>
                <UserAddOutlined />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Row type="flex" justify="space-between" align="middle">
              <Col>
                <h2>
                  44.779.000<sup>VND</sup>
                </h2>
                <p>Earnings of Month</p>
              </Col>
              <Col>
                <DollarOutlined />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Row type="flex" justify="space-between" align="middle">
              <Col>
                <h2>2</h2>
                <p>New Orders</p>
              </Col>
              <Col>
                <FileAddOutlined />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Table
        bordered={true}
        dataSource={allOrders.allOrderTransform}
        columns={columns}
        title={() => <h3>History</h3>}
        pagination={{
          pageSize: 2,
          total: allOrders.totalOrders,
          onChange: (page, pageSize) => {
            fetchAllOrders(page, pageSize);
            setPageHistory(page);
          },
        }}
      />
    </>
  );
};

export default Dashboard;
