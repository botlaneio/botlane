import Link from "next/link";

import { SignInForm } from "@/components/auth/sign-in-form";

export default function SignInPage() {
  return (
    <div className="mx-auto grid w-full max-w-4xl gap-6">
      <SignInForm />
      <p className="justify-self-center text-center font-mono text-xs uppercase tracking-widest text-zinc-400">
        New to Botlane?{" "}
        <Link
          className="font-medium text-white underline decoration-indigo-300/70 underline-offset-4 transition-colors hover:text-indigo-100"
          href="/sign-up"
        >
          Create an account
        </Link>
      </p>
    </div>
  );
}
