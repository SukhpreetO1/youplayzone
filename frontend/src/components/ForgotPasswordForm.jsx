import { cn, Button, Input, Label, Link, LOGIN_URL } from "@/app/routes/route.jsx";

export function ForgotPasswordForm({
  className,
  ...props
}) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
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
              <Input id="email" type="email" placeholder="m@example.com" required />
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