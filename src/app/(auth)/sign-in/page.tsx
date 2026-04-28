import Link from "next/link";

import { SignInForm } from "@/components/auth/sign-in-form";

export default function SignInPage() {
  return (
    <div className="grid w-full justify-items-center gap-6">
      <SignInForm />
      <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
        New to Botlane?{" "}
        <Link className="font-medium text-white underline decoration-indigo-300/70 underline-offset-4" href="/sign-up">
          Create an account
        </Link>
      </p>
    </div>
  );
}
