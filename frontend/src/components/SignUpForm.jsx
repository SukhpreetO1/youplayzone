"use client";
import { useState } from "react";
import Select from "react-select";
import { cn, Button, Input, Label, LOGIN_URL, Link, validate_signup_submit_form, useRouter, axiosInstance, CryptoJS, POSTGRES_API_SIGNUP, toast, DASHBOARD } from "@/app/routes/route.jsx";

export function SignUpForm({
  className,
  ...props
}) {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    social_platforms: [],
    password: '',
    confirm_password: '',
  });

  const platformOptions = [
    { value: "1", label: "YouTube" },
    { value: "2", label: "Facebook" },
    { value: "3", label: "Instagram" },
    { value: "4", label: "Tick-Toc" },
  ];

  const handleSelectChange = (selectedOptions) => {
    setSelectedPlatforms(selectedOptions || []);
    setFormData(prevFormData => ({
      ...prevFormData,
      social_platforms: selectedOptions.map(option => option.value),
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const validation_errors = validate_signup_submit_form({ ...formData, [name]: value });
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: validation_errors[name] || null }));
  };

  const encryptPassword = (password) => {
    return CryptoJS.AES.encrypt(password, process.env.NEXT_PUBLIC_SECRET_KEY).toString();
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const validation_errors = validate_signup_submit_form(formData);

    if (Object.keys(validation_errors).length > 0) {
      setErrors(validation_errors);
      return;
    }

    const encryptedPassword = encryptPassword(formData.password);
    const formDataWithEncryptedPassword = { ...formData, password: encryptedPassword };

    try {
      const response = await axiosInstance.post(POSTGRES_API_SIGNUP, { ...formDataWithEncryptedPassword });
      console.log("response", response);
      
      router.push(DASHBOARD);
      toast.success(response.data.message);
    } catch (error) {
      console.log("error", error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props} onSubmit={formSubmit}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create New Account</h1>
      </div>
      <div className="grid gap-6">
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="grid gap-2 lg:w-1/2">
            <Label htmlFor="text">Name <span className="important_mark text-red-500">*</span> </Label>
            <Input id="name" type="name" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} error={errors.name} />
            <span className={`${errors.name} text-red-500 font-semibold text-xs`} >{errors.name}</span>
          </div>
          <div className="grid gap-2 lg:w-1/2">
            <Label htmlFor="username">Username <span className="important_mark text-red-500">*</span> </Label>
            <Input id="username" type="username" name="username" placeholder="Username" value={formData.username} onChange={handleInputChange} error={errors.username} />
            <span className={`${errors.username} text-red-500 font-semibold text-xs`} >{errors.username}</span>
          </div>
        </div>
        <div className="">
          <div className="grid gap-2">
            <Label htmlFor="email">Email <span className="important_mark text-red-500">*</span> </Label>
            <Input id="email" type="email" name="email" placeholder="m@example.com" value={formData.email} onChange={handleInputChange} error={errors.email} />
            <span className={`${errors.email} text-red-500 font-semibold text-xs`} >{errors.email}</span>
          </div>
        </div>
        <div>
          <div className="grid gap-2 w-full">
            <Label htmlFor="social_platforms">Select Social Platforms</Label>
            <Select id="social_platforms" isMulti options={platformOptions} value={selectedPlatforms} onChange={handleSelectChange} placeholder="Select platforms" className="w-full"
              styles={{
                option: (provided, state) => ({
                  ...provided,
                  backgroundColor: state.isSelected ? "#4CAF50" : state.isFocused ? "#E8F5E9" : "white",
                  color: state.isSelected ? "white" : "black",
                }),
              }} />
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="grid gap-2 lg:w-1/2">
            <Label htmlFor="password">Password <span className="important_mark text-red-500">*</span> </Label>
            <Input id="password" type="password" name="password" value={formData.password} onChange={handleInputChange} error={errors.password} />
            <span className={`${errors.password} text-red-500 font-semibold text-xs`} >{errors.password}</span>
          </div>
          <div className="grid gap-2 lg:w-1/2">
            <Label htmlFor="confirm_password">Confirm Password <span className="important_mark text-red-500">*</span> </Label>
            <Input id="confirm_password" type="password" name="confirm_password" value={formData.confirm_password} onChange={handleInputChange} error={errors.confirm_password} />
            <span className={`${errors.confirm_password} text-red-500 font-semibold text-xs`} >{errors.confirm_password}</span>
          </div>
        </div>
        <Button type="submit" className="w-full">
          Create Account
        </Button>
      </div>
      <div className="text-center">
        Already have an account?{" "}
        <Link href={LOGIN_URL} className="underline underline-offset-4">Login</Link> here
      </div>
    </form>
  );
}