"use client";
import { useEffect, useState } from "react";
import { cn, Button, Input, Label, validate_additional_profile_form_submit_form, axiosInstance, toast, POSTGRES_API_ADDITIONAL_PROFILE_DETAILS } from "@/app/routes/route.jsx";

export function ProfileAdditionalDetailsForm({
  className,
  userDetails,
  userAdditionalDetails,
  ...props
}) {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    google_drive_link: '',
  });

  useEffect(() => {
    if (userAdditionalDetails) {
      setFormData(prev => ({
        ...prev,
        google_drive_link: userAdditionalDetails.google_drive_link || ''
      }))
    }
  }, [userAdditionalDetails])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const validation_errors = validate_additional_profile_form_submit_form({ ...formData, [name]: value });
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: validation_errors[name] || null }));
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const validation_errors = validate_additional_profile_form_submit_form(formData);

    if (Object.keys(validation_errors).length > 0) {
      setErrors(validation_errors);
      return;
    }

    try {
      const user_id = userDetails.id;
      const formDataIncludingUserId = {
        ...formData,
        user_id,
      };
      const response = await axiosInstance.post(POSTGRES_API_ADDITIONAL_PROFILE_DETAILS, { ...formDataIncludingUserId });
      if (response.data.statusCode !== 200) {
        toast.error(response.data.message);
        return;
      }
      toast.success(response.data.message);
    } catch (error) {
      console.log("Error while saving the additional profile data : ", error);
      toast.error(error.response.data.message);
    }
  }

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props} onSubmit={formSubmit}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Additional Details</h1>
      </div>
      <div className="grid gap-2">
        <div className="">
          <div className="grid gap-4">
            <Label htmlFor="text">Google Drive Link</Label>
            <Input id="google_drive_link" type="text" name="google_drive_link" placeholder="Google drive link" value={formData.google_drive_link} error={errors.google_drive_link} className="border border-black" onChange={handleInputChange} />
            <span className={`${errors.google_drive_link} text-red-500 font-semibold text-xs`} >{errors.google_drive_link}</span>
          </div>
        </div>
        <Button type="submit" className="w-full">
          Update
        </Button>
      </div>
    </form>
  );
}