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
    // gọi API ở đây để sign up
    console.log({ data });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center w-full"
    >
      <div className="w-full mb-4 form-group">
        <label htmlFor="username" className="inline-block mb-2">
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
      <div className="w-full mb-4 form-group">
        <label htmlFor="name" className="inline-block mb-2">
          Họ tên
        </label>
        <Input
          id="name"
          type="name"
          name="name"
          placeholder="Nguyễn Minh Vy"
          control={control}
        ></Input>
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>
      <div className="w-full mb-4 form-group">
        <label htmlFor="birthd" className="inline-block mb-2">
          Ngày sinh
        </label>
        <Input id="birthd" type="date" name="birthd" control={control}></Input>
        {errors.birthd && (
          <p className="text-sm text-red-500">{errors.birthd.message}</p>
        )}
      </div>
      <div className="w-full mb-4 form-group">
        <label htmlFor="phone" className="inline-block mb-2">
          Điện thoại
        </label>
        <Input
          id="phone"
          type="tel"
          name="phone"
          placeholder="0522464748"
          control={control}
          pattern="(\+84|0)\d{9,10}"
        ></Input>
        {errors.phone && (
          <p className="text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>
      {/* Tỉnh/ Thành phố ->  Quận/ Huyện*/}
      <div className="w-full mb-4 form-group">
        <label htmlFor="address" className="inline-block mb-2">
          Địa chỉ chi tiết
        </label>
        <Input
          id="address"
          type="text"
          name="address"
          control={control}
        ></Input>
        {errors.address && (
          <p className="text-sm text-red-500">{errors.address.message}</p>
        )}
      </div>
      <div className="w-full mb-4 form-group">
        <label htmlFor="password" className="inline-block mb-2">
          Mật khẩu của bạn
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
      <div className="w-full mb-4 form-group">
        <label htmlFor="repassword" className="inline-block mb-2">
          Nhập lại mật khẩu
        </label>
        <Input
          id="repassword"
          type="repassword"
          name="repassword"
          placeholder="********"
          control={control}
        ></Input>
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>
      <Button
        className={`hover:bg-hover ${isSubmitting ? "opacity-40" : ""}`}
        type="submit"
        disabled={isSubmitting}
      >
        ĐĂNG KÝ
      </Button>
    </form>
  );
};

export default SignUpForm;
