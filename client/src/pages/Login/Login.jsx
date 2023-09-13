import React, { useEffect } from "react";
import classes from "./Login.module.css";
import { Button, Form, Input, Space, Typography } from "antd";
import background from "../../assets/images/banner1.jpg";
import { useLogin } from "../../apis/login";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setUser } from "../../store/userSlice";
import { LocalStorageService } from "../../services";

const Login = () => {
  // react bootstrap
  // const [validated, setValidated] = useState(false);
  // const [currentUser, fetchUseLogin, isLoading] = useLogin();
  // const [formValues, setFormValues] = useState({
  //   email: undefined,
  //   password: undefined,
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
  //     fetchUseLogin(formValues.email, formValues.password);
  //     setValidated(true);
  //   }
  // };

  // return (
  //   <div className="d-flex">
  //     <div className={classes.form}>
  //       <h3>Login</h3>
  //       <Form noValidate validated={validated} onSubmit={handleSubmit}>
  //         <Form.Control
  //           placeholder="Email"
  //           name="email"
  //           type="email"
  //           required
  //           className="mb-3"
  //           onChange={onInputChange}
  //           value={formValues.email}
  //         />

  //         <Form.Control
  //           placeholder="Password"
  //           name="password"
  //           type="password"
  //           required
  //           className="mb-3"
  //           onChange={onInputChange}
  //           value={formValues.password}
  //         />

  //         <Button type="primary" loading={isLoading}>
  //           Login
  //         </Button>

  //         <div className="d-flex justify-content-center">
  //           <p className="me-3">Create an account?</p>
  //           <NavLink to="/signup">Click</NavLink>
  //         </div>
  //       </Form>
  //     </div>
  //   </div>
  // );

  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentUser, fetchUseLogin, isLoading] = useLogin();
  const submitForm = (values) => {
    fetchUseLogin(values.email, values.password);
  };

  useEffect(() => {
    if (currentUser) {
      dispatch(setUser(currentUser));
      LocalStorageService.store("user", currentUser);
      navigate("/");
    }
  }, [currentUser]);

  return (
    <div className={classes.wrapper}>
      <img src={background} className={classes.img} />
      <Form
        className={classes.form}
        form={form}
        size="middle"
        layout="vertical"
        name="login"
        onFinish={submitForm}
      >
        <Typography.Title level={2}>Login</Typography.Title>

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

        <Form.Item>
          <Button loading={isLoading} htmlType="submit" type="primary">
            Login
          </Button>
        </Form.Item>
        <Space size="small">
          <Typography.Text>Create an acount?</Typography.Text>
          <NavLink to="/signup">
            <Typography.Text>Click</Typography.Text>
          </NavLink>
        </Space>
      </Form>
    </div>
  );
};

export default Login;
