import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function LandingPage() {
  return (
    <div>
      <div>
        <Link href="/sign-in">
          <Button>Sign in</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  )
}
