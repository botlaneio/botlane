import Link from "next/link";

import { SignUpForm } from "@/components/auth/sign-up-form";

export default function SignUpPage() {
  return (
    <div className="grid w-full justify-items-center gap-6">
      <SignUpForm />
      <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
        Already have an account?{" "}
        <Link className="font-medium text-white underline decoration-indigo-300/70 underline-offset-4" href="/sign-in">
          Sign in
        </Link>
      </p>
    </div>
  );
}
