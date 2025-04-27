"use client"
import { useState } from "react";
import { cn, Button, Input, Label, Link, SIGNUP_URL, FORGOT_PASSWORD, useRouter, axiosInstance, POSTGRES_API_LOGIN, validate_login_submit_form, toast, DASHBOARD, ADMIN_DASHBOARD } from "@/app/routes/route.jsx";

export function LoginForm({
  className,
  ...props
}) {
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const validation_errors = validate_login_submit_form({ ...formData, [name]: value });
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: validation_errors[name] || null }));
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const validation_errors = validate_login_submit_form(formData);

    if (Object.keys(validation_errors).length > 0) {
      setErrors(validation_errors);
      return;
    }

    try {
      const response = await axiosInstance.post(POSTGRES_API_LOGIN, { ...formData });
      if (response.data.statusCode !== 200) {
        toast.error(response.data.message);
        return;
      } 

      if (response.data.role == 1) {      
        router.push(ADMIN_DASHBOARD);
      } else if (response.data.role == 2) {
        router.push(DASHBOARD);
      }
      toast.success(response.data.message);
    } catch (error) {
      console.log("error", error);
      toast.error(error.response.data.message);
    }
  };

  return (
    (<form className={cn("flex flex-col gap-6", className)} {...props} onSubmit={formSubmit}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" name="email" placeholder="m@example.com" value={formData.email} onChange={handleInputChange} error={errors.email} />
          <span className={`${errors.email} text-red-500 font-semibold text-xs`} >{errors.email}</span>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input id="password" type="password" name="password" value={formData.password} onChange={handleInputChange} error={errors.password} />
          <span className={`${errors.password} text-red-500 font-semibold text-xs`} >{errors.email}</span>
          <Link href={FORGOT_PASSWORD} className="ml-auto text-sm underline-offset-4 hover:underline">
            Forgot your password?
          </Link>
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href={SIGNUP_URL} className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
    </form>)
  );
}
