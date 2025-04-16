"use client"
import { useState } from "react";
import { cn, Button, Input, Label, Link, LOGIN_URL, useRouter, validate_forgot_password_submit_form, POSTGRES_API_FORGOT_PASSWORD, toast, RESET_PASSWORD } from "@/app/routes/route.jsx";

export function ForgotPasswordForm({
  className,
  ...props
}) {
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const validation_errors = validate_forgot_password_submit_form({ ...formData, [name]: value });
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: validation_errors[name] || null }));
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const validation_errors = validate_forgot_password_submit_form(formData);

    if (Object.keys(validation_errors).length > 0) {
      setErrors(validation_errors);
      return;
    }

    try {
      const response = await axiosInstance.post(POSTGRES_API_FORGOT_PASSWORD, { ...formData });
      console.log("response", response);
      
      router.push(RESET_PASSWORD);
      toast.success(response.data.message);
    } catch (error) {
      console.log("error", error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={formSubmit}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-xl font-bold">Forgot Password</h1>
            <div className="text-center text-sm">
              Enter your email below to reset your password
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" name="email" placeholder="m@example.com" value={formData.email} onChange={handleInputChange} error={errors.email} />
              <span className={`${errors.email} text-red-500 font-semibold text-xs`} >{errors.email}</span>
            </div>
            <Button type="submit" className="w-full">Forgot Password</Button>
            <div className="w-full text-center -mt-4">
              <Link href={LOGIN_URL} className="hover:underline hover:underline-offset-4 text-sm">
                Login
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}