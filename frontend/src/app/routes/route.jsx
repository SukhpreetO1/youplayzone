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


export { LoginForm } from "@/components/LoginForm";
export { SignUpForm } from "@/components/SignUpForm";
export { ForgotPasswordForm } from "@/components/ForgotPasswordForm";


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


// Components
export { ThemeProvider } from "@/app/(users)/theme_provider/page.jsx";
export { default as Navbar } from "@/app/(users)/navbar/page.jsx";
export { default as VideoPlayer } from "@/app/VideoPlayer/page.jsx";
export { default as LandingPage } from "@/app/(users)/landing_page/page.jsx";


// API
export const POSTGRES_ROLE_DATA = "/api/role";
export const POSTGRES_API_SIGNUP = "/api/signup";
export const POSTGRES_API_LOGIN = "/api/login";
export const POSTGRES_API_FORGOT_PASSWORD = "/api/forgot_password";
export const POSTGRES_API_PROFILE = "/api/profile";


// Redirection routes
export const HOMEPAGE_IMAGE = "/placeholder.svg";

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