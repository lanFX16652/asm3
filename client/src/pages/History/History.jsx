import React from "react";
import classes from "./History.module.css";
import { Space, Table, Tag } from "antd";

const History = () => {
  const columns = [
    {
      title: "ID ORDER",
      dataIndex: "idOrder",
      key: "idOrder",
    },
    {
      title: "ID USER",
      dataIndex: "idUser",
      key: "idUser",
    },
    {
      title: "NAME",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "PHONE",
      dataIndex: "Phone",
      key: "Phone",
    },
    {
      title: "ADDRESS",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "TOTAL",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "DELIVERY",
      dataIndex: "delivery",
      key: "delivery",
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "DETAIL",
      dataIndex: "detail",
      key: "detail",
      render: (detail, record) => <button>View</button>,
    },
  ];

  const data = [
    {
      key: "1",
      idOrder: "",
      idUser: "",
      name: "John Brown",
      phone: "",
      address: "New York No. 1 Lake Park",
      total: "",
      delivery: "",
      status: "",
      detail: "",
    },
  ];

  return (
    <>
      <div
        className={`d-flex justify-content-between align-items-center p-5 fst-italic ${classes.header}`}
      >
        <h1>HISTORY</h1>
        <div>
          <h6 className={classes["breadcrum"]}>HISTORY</h6>
        </div>
      </div>

      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default History;
