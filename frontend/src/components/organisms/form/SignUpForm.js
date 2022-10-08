import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

const validateSchema = yup
  .object({
    // username: yup.string().required("Trường này không được để trống"),
    // password: yup
    //   .string()
    //   .min(8, "Tối thiểu 8 kí tự")
    //   .required("Trường này không được để trống"),
  })
  .required();

const SignUpForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(validateSchema), mode: "onChange" });
  const onSubmit = (data) => {
    // gọi API ở đây để check -> sign in
    console.log({ data });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full items-center"
    >
      <div className="form-group w-full mb-4">
        <label htmlFor="username" className="mb-2 inline-block">
          Tên đăng nhập
        </label>
        <Input
          id="username"
          type="text"
          name="username"
          placeholder="ourlittlecorner2002"
          control={control}
        ></Input>
        {errors.username && (
          <p className="text-sm text-red-500">{errors.username.message}</p>
        )}
      </div>
      <div className="form-group w-full mb-4">
        <label htmlFor="password" className="mb-2 inline-block">
          Nhập mật khẩu
        </label>
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="********"
          control={control}
        ></Input>
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>
      <Button
        className={`${isSubmitting ? "opacity-40" : ""}`}
        type="submit"
        disabled={isSubmitting}
      >
        ĐĂNG KÝ
      </Button>
    </form>
  );
};

export default SignUpForm;
