import Link from "next/link";

import { SignUpForm } from "@/components/auth/sign-up-form";

export default function SignUpPage() {
  return (
    <div className="mx-auto grid w-full max-w-4xl gap-6">
      <SignUpForm />
      <p className="justify-self-center text-center font-mono text-xs uppercase tracking-widest text-zinc-400">
        Already have an account?{" "}
        <Link
          className="font-medium text-white underline decoration-indigo-300/70 underline-offset-4 transition-colors hover:text-indigo-100"
          href="/sign-in"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
