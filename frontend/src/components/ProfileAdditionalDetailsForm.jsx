"use client";
import { useEffect, useState } from "react";
import { cn, Button, Input, Label, validate_additional_profile_form_submit_form, toast } from "@/app/routes/route.jsx";
import axios from 'axios'; // You can use axios to call your backend API for OAuth2 redirection

export function ProfileAdditionalDetailsForm({
  className,
  userDetails,
  userAdditionalDetails,
  ...props
}) {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    google_drive_link: '',
    youtube_link: '',
  });

  useEffect(() => {
    if (userAdditionalDetails) {
      setFormData(prev => ({
        ...prev,
        google_drive_link: userAdditionalDetails.google_drive_link || '',
        youtube_link: userAdditionalDetails.youtube_link || '',
      }));
    }
  }, [userAdditionalDetails]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const validation_errors = validate_additional_profile_form_submit_form({ ...formData, [name]: value });
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: validation_errors[name] || null }));
  };

  const validateYouTubeLink = (url) => {
    const youtubePattern = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=[\w-]+|@[\w-]+)|youtu\.be\/[\w-]+)$/;
    return youtubePattern.test(url);
  };

  const handleOAuth2Redirect = async () => {
    try {
      // Make an API call to your NestJS backend to generate the Google Auth URL
      const response = await axios.get('http://localhost:3000/api/auth/google');
      if (response.data.url) {
        // Redirect to Google OAuth2 authorization URL
        window.location.href = response.data.url;
      } else {
        toast.error('Unable to initiate authentication flow.');
      }
    } catch (error) {
      toast.error('Error initiating OAuth2 flow.');
    }
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const validation_errors = validate_additional_profile_form_submit_form(formData);

    if (formData.youtube_link && !validateYouTubeLink(formData.youtube_link)) {
      validation_errors.youtube_link = "Invalid YouTube link.";
    }

    if (Object.keys(validation_errors).length > 0) {
      setErrors(validation_errors);
      return;
    }

    try {
      // Trigger OAuth2 authentication by calling the backend route
      handleOAuth2Redirect();
    } catch (error) {
      toast.error("Authentication failed: " + error.message);
    }
  };

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props} onSubmit={formSubmit}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Additional Details</h1>
      </div>
      <div className="grid gap-2">
        <div className="">
          <div className="grid gap-4">
            <Label htmlFor="google_drive_link">Google Drive Link</Label>
            <Input
              id="google_drive_link"
              type="text"
              name="google_drive_link"
              placeholder="Google drive link"
              value={formData.google_drive_link}
              error={errors.google_drive_link}
              className="border border-black"
              onChange={handleInputChange}
            />
            <span className={`${errors.google_drive_link} text-red-500 font-semibold text-xs`}>
              {errors.google_drive_link}
            </span>
          </div>
        </div>

        {/* YouTube Link Input */}
        <div className="grid gap-4">
          <Label htmlFor="youtube_link">YouTube Link</Label>
          <Input
            id="youtube_link"
            type="text"
            name="youtube_link"
            placeholder="Enter YouTube channel link"
            value={formData.youtube_link}
            error={errors.youtube_link}
            className="border border-black"
            onChange={handleInputChange}
          />
          <span className={`${errors.youtube_link} text-red-500 font-semibold text-xs`}>
            {errors.youtube_link}
          </span>
        </div>

        <Button type="submit" className="w-full">
          Update and Authenticate
        </Button>
      </div>
    </form>
  );
}
