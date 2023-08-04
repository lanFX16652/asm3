import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
import background from "../../assets/images/banner1.jpg";
import classes from "./SignUp.module.css";
import { useSignup } from "../../apis/login";
import { Button, Form, Input, InputNumber, Typography } from "antd";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  // const [validated, setValidated] = useState(false);
  const [user, fetchUseSignup, isLoading] = useSignup();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [formValues, setFormValues] = useState({
  //   fullname: undefined,
  //   email: undefined,
  //   password: undefined,
  //   phone: undefined,
  // });

  // const onInputChange = (e) => {
  //   setFormValues({
  //     ...formValues,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const form = event.currentTarget;

  //   if (form.checkValidity() === false) {
  //     event.stopPropagation();
  //   }

  //   if (form.checkValidity() === true) {
  //     fetchUseSignup(
  //       formValues.fullname,
  //       formValues.email,
  //       formValues.password,
  //       formValues.phone
  //     );
  //     setValidated(true);
  //   }
  // };

  const [form] = Form.useForm();
  const handleSubmit = (values) => {
    fetchUseSignup(
      values.fullname,
      values.email,
      values.password,
      values.phone
    );
  };

  if (user) {
    dispatch(setUser(user));
    navigate("/");
  }

  return (
    //REACT BOOTSTRAP
    // <div className="d-flex">
    //   <div className={classes.form}>
    //     <h3>Sign Up</h3>
    //     <Form noValidate validated={validated} onSubmit={handleSubmit}>
    //       <Form.Control
    //         className="mb-3"
    //         placeholder="Fullname"
    //         type="text"
    //         name="fullname"
    //         required
    //         onChange={onInputChange}
    //         value={formValues.fullname}
    //       />

    //       <Form.Control
    //         placeholder="Email"
    //         name="email"
    //         type="email"
    //         required
    //         className="mb-3"
    //         onChange={onInputChange}
    //         value={formValues.email}
    //       />

    //       <Form.Control
    //         placeholder="Password"
    //         name="password"
    //         type="password"
    //         required
    //         className="mb-3"
    //         onChange={onInputChange}
    //         value={formValues.password}
    //       />

    //       <Form.Control
    //         placeholder="Phone"
    //         name="phone"
    //         type="number"
    //         required
    //         className="mb-3"
    //         onChange={onInputChange}
    //         value={formValues.phone}
    //       />

    //       <Button loading={isLoading} type="submit">
    //         Sign Up
    //       </Button>
    //     </Form>
    //   </div>
    // </div>
    <div className={classes.wrapper}>
      <img src={background} className={classes.img} />
      <Form
        className={classes.form}
        form={form}
        size="middle"
        layout="vertical"
        name="login"
        onFinish={(values) => handleSubmit(values)}
      >
        <Typography.Title level={2}>SignUp</Typography.Title>
        <Form.Item
          label="fullname"
          name="fullname"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="email"
          name="email"
          rules={[{ required: true }, { type: "email" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="password"
          name="password"
          rules={[{ required: true }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="phone"
          name="phone"
          rules={[{ required: true }, { type: "number" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item>
          <Button loading={isLoading} htmlType="submit" type="primary">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
