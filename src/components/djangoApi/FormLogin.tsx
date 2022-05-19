import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { SubmitHandler, useController, UseFormReturn } from "react-hook-form";
import { User } from "../../models/User";
import { useLoginUserMutation } from "./authHookApi";
import CSRFToken from "./csrfToken";

export const FormLogin: React.FC<{
  form: UseFormReturn<User, any>;
  closeModal: any;
  userSetter: any;
}> = React.memo(({ form: { control, handleSubmit }, closeModal: closeModal, userSetter: userSetter } ) => {
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
  // const [errorLogin, setErrorLogin] = useState("");
  // const saveMutation = useLoginUserMutation();
  // const onSubmit: SubmitHandler<User> = async (data) => {
  //   let res = await saveMutation.mutateAsync({
  //     ...data,
  //   });
  //   if (res.success == "ok") {
  //     setErrorLogin("");
  //     userSetter(res.user);
  //     closeModal();
  //   } else {
  //     setErrorLogin("Пользователь не найден!");
  //   }
  // };

  return ( <div></div>
    // <Form onSubmit={handleSubmit(onSubmit)}>
    //   <CSRFToken />
    //   <FormGroup>
    //     <Label htmlFor="username">Логин</Label>
    //     <Input type="text" id="username" name="username" {...login} />
    //   </FormGroup>
    //   <FormGroup>
    //     <Label htmlFor="password">Пароль</Label>
    //     <Input type="password" id="password" name="password" {...password} />
    //   </FormGroup>
    //   <FormGroup check className="check-style">
    //     <Label check>
    //       <Input type="checkbox" name="remember" />
    //       Запомнить
    //     </Label>
    //   </FormGroup>
    //   <div style={{margin: '0 0 15px 0'}}>{errorLogin}</div>
    //   <div className="btn-group-log">
    //     <Button type="submit" value="submit" className="log-btn" color="dark">
    //       Вход
    //     </Button>
    //     <Button outline color="dark" className="log-btn">
    //       Регистрация
    //     </Button>
    //   </div>
    // </Form>
  );
});
