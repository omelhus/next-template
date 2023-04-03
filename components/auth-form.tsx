import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function AuthForm() {
  const onSubmit = () => {
    // Handle email submit here.  
  }
  
  const signInWithGoogle = () => {
    // Handle sign in with Google here.
  }
  
  return (
    <div>
      <div className="space-y-1 p-6">
        <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">Welcome back</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Enter your email to sign in to your account</p>
      </div>
      <div className="px-6 pb-6">
        <form onSubmit={onSubmit}>
          <div className="space-y-2">
            <Input type="email" placeholder="name@example.com" />
            <Button className="w-full">Sign in with Email</Button>
          </div>
        </form>
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-slate-300" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-slate-600">Or continue with</span>
          </div>
        </div>
        <Button variant="outline" className="w-full" onClick={() => signInWithGoogle()}>Sign in with Google</Button>
      </div>
    </div>
  )
}