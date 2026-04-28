import Link from "next/link";

import { SignUpForm } from "@/components/auth/sign-up-form";

export default function SignUpPage() {
  return (
    <div className="grid w-full justify-items-center gap-4">
      <SignUpForm />
      <p className="text-sm text-zinc-400">
        Already have an account?{" "}
        <Link className="font-medium text-white underline" href="/sign-in">
          Sign in
        </Link>
      </p>
    </div>
  );
}
