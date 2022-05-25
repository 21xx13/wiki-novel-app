import React, { useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { SubmitHandler, useController, UseFormReturn } from "react-hook-form";
import { User } from "../../models/User";
import { useLoginUserMutation } from "./authHookApi";
import CSRFToken from "./csrfToken";
import { Link, useNavigate } from "react-router-dom";
import classes from './LoginPage.module.css';

export const LoginPage: React.FC<{
  form: UseFormReturn<User, any>;
  userSetter: any;
  isLogin: boolean;
}> = React.memo(
  ({
    form: { control, handleSubmit },
    userSetter: userSetter,
    isLogin: isLogin,
  }) => {
    const { field: login, fieldState: commentState } = useController({
      name: "login",
      control,
      rules: { required: "Обязательное поле!" },
    });
    const { field: password, fieldState: authorState } = useController({
      name: "password",
      control,
      rules: { required: "Обязательное поле!" },
    });
    const [errorLogin, setErrorLogin] = useState("");
    const saveMutation = useLoginUserMutation(isLogin);
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<User> = async (data) => {
      let res = await saveMutation.mutateAsync({
        ...data,
      });
      if (res.success == "ok") {
        setErrorLogin("");
        userSetter(res.user);
        navigate("/");
      }
      else{
          setErrorLogin(res.errorText);
      }
    };

    let link = isLogin ? (
      <p>
        Ещё нет аккаунта? <Link to="/registration">Зарегистрироваться</Link>
      </p>
    ) : (
      <p>
        Уже есть аккаунт? <Link to="/login">Войти</Link>
      </p>
    );
    let remember = isLogin ? (
      <FormGroup check className="check-style">
        <Label check>
          <Input type="checkbox" name="remember" />
          Запомнить меня
        </Label>
      </FormGroup>
    ) : ( <div></div> );

    return (
      <div className={classes.loginWrap}>
        <h3>{isLogin ? "Вход" : "Регистрация"}</h3>
        <br></br>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <CSRFToken />
          <FormGroup>
            <Label htmlFor="username">Логин</Label>
            <Input type="text" id="username" name="username" {...login} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Пароль</Label>
            <Input
              type="password"
              id="password"
              name="password"
              {...password}
            />
          </FormGroup>
          {remember}
          <div style={{ margin: "0 0 15px 0" }}>{errorLogin}</div>
          <div className="w3layouts-newsletter text-center">
            <button
              type="submit"
              value="submit"
              className="btn1 btn"
              style={{ fontSize: "13px" }}
            >
              {isLogin ? "Вход" : "Регистрация"}
            </button>
          </div>
        </Form>
        <br />
        {link}
      </div>
    );
  }
);
