import React from "react";
import classes from "./HistoryDetail.module.css";
import { Typography, Space, Empty } from "antd";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { parseCurrency } from "../../services/index";
import Table from "react-bootstrap/Table";

const HistoryDetail = () => {
  const { orderId } = useParams();
  const orders = useSelector((state) => state.order?.orders);
  const order = orders?.find((orderInStore) => orderInStore?._id === orderId);

  if (!order) return <Empty></Empty>;

  return (
    <div className="px-5">
      <Typography.Title>INFORMATION ORDER</Typography.Title>
      <Space style={{ marginBottom: "24px" }} direction="vertical">
        <Typography.Text type="secondary" italic>
          IDUser: {order._id}
        </Typography.Text>
        <Typography.Text type="secondary" italic>
          Full Name: {order.fullname}
        </Typography.Text>
        <Typography.Text type="secondary" italic>
          Phone: {order.phoneNumber}
        </Typography.Text>
        <Typography.Text type="secondary" italic>
          Address: {order.address}
        </Typography.Text>
        <Typography.Text type="secondary" italic>
          Total: {parseCurrency(order.totalPrice)}
        </Typography.Text>
      </Space>

      <Table responsive>
        <tr className={classes["table-heading"]}>
          <th>ID PRODUCT</th>
          <th>IMAGE</th>
          <th>NAME</th>
          <th>PRICE</th>
          <th>COUNT</th>
        </tr>
        {order?.cart?.map((item) => (
          <tr className={classes["table-content"]}>
            <td>{item?.product?._id}</td>
            <td>
              <img src={item?.product?.img1} style={{ width: "20vw" }} />
            </td>
            <td>{item?.product?.name}</td>
            <td>{parseCurrency(item?.product?.price)}</td>
            <td>{item?.qty}</td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default HistoryDetail;
