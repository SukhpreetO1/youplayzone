export { cn } from "@/lib/utils"
export { default as axiosInstance } from "@/lib/axiosInstance"
export { Cookies } from "js-cookie";

// Shadcn UI components
export { Label } from "@/app/ui/label"
export { Input } from "@/app/ui/input.jsx";
export { Button } from "@/app/ui/button.jsx";
export { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/app/ui/navigation-menu";
export { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/ui/dropdown-menu";
export { Avatar, AvatarImage, AvatarFallback } from "@/app/ui/avatar.jsx";
export { Card } from "@/app/ui/card";


export { LoginForm } from "@/components/LoginForm";
export { SignUpForm } from "@/components/SignUpForm";
export { ForgotPasswordForm } from "@/components/ForgotPasswordForm";
export { ProfileForm } from "@/components/ProfileForm";
export { ProfileAdditionalDetailsForm } from "@/components/ProfileAdditionalDetailsForm";
export { HeroSection } from "@/components/(landing_page)/HeroSection"
export { FeaturesSection } from "@/components/(landing_page)/FeaturesSection"
export { HowItWorksSection } from "@/components/(landing_page)/HowItWorksSection"
export { BenefitsSection } from "@/components/(landing_page)/BenefitsSection"
export { LiveDemoSection } from "@/components/(landing_page)/LiveDemoSection"
export { TestimonialsSection } from "@/components/(landing_page)/TestimonialsSection"
export { FinalCTASection } from "@/components/(landing_page)/FinalCTASection"
export { FooterSection } from "@/components/FooterSection"


// Other libraries
export { Menu, Sun, Moon } from "lucide-react";
export { useTheme } from "next-themes";
export { useRouter } from "next/navigation";
export { ToastContainer, toast } from "react-toastify";
export { default as Link } from "next/link";
export { default as axios } from "axios";
export { default as CryptoJS } from "crypto-js";
export { default as dotenv } from 'dotenv';


// JS Files
export { validate_signup_submit_form } from "@/utils/js/signup";
export { validate_login_submit_form } from "@/utils/js/login";
export { validate_forgot_password_submit_form } from "@/utils/js/forgot_password";
export { validate_additional_profile_form_submit_form } from "@/utils/js/additional_profile_form";
export { validate_profile_submit_form } from "@/utils/js/profile_form";


// Components
export { default as Navbar } from "@/app/(users)/navbar/page.jsx";
// export { default as VideoPlayer } from "@/app/VideoPlayer/page.jsx";
export { default as LandingPage } from "@/app/(users)/landing_page/page.jsx";


// API
export const POSTGRES_ROLE_DATA = "/api/role";
export const POSTGRES_API_SIGNUP = "/api/signup";
export const POSTGRES_API_LOGIN = "/api/login";
export const POSTGRES_API_FORGOT_PASSWORD = "/api/forgot_password";
export const POSTGRES_API_LOGOUT = "/api/logout";
export const POSTGRES_API_PROFILE = "/api/profile";
export const POSTGRES_PROFILE_UPDATE_DETAILS = "/api/profile_update";
export const POSTGRES_API_ADDITIONAL_PROFILE_DETAILS = "/api/additional_profile_details";
export const POSTGRES_API_YOUTUBE_CONNECTION = "/api/youtube_connection/connect";


// images path
export const HOMEPAGE_IMAGE = "/placeholder.svg";
export const CLOCK = "/images/clock.png";
export const EYE = "/images/eye.png";
export const GOOGLE_DRIVE = "/images/google_drive.png";
export const LINKEDIN = "/images/linkedin.png";
export const NEXT_ARROW = "/images/next.png";
export const RISING = "/images/rising.png";
export const ROCKET = "/images/rocket.png";
export const TWITTER = "/images/twitter-x.png";
export const YOUTUBE = "/images/youtube.png";


// Redirection routes
export const HOME_URL = "/";
export const LOGIN_URL = "/login";
export const SIGNUP_URL = "/signup";
export const FORGOT_PASSWORD = "/forgot_password";
export const RESET_PASSWORD = "/reset_password";

// export const PRIVACY_POLICIES = "/privacy_policy";
// export const TERMS_AND_CONDITION = "/terms_and_conditions";

// Users Redirection Routes
export const DASHBOARD = "/dashboard";
export const PROFILE = "/profile";

    // Adming redirection routes
export const ADMIN_DASHBOARD = "/admin/dashboard";