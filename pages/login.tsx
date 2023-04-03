import { AuthForm } from "@/components/auth-form"
import { Layout } from "@/components/layout"

export default function LoginPage() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-[400px] mx-auto border rounded-md shadow-sm">
          <AuthForm />
        </div>
      </div>
    </Layout>
  )
}