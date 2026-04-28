import Link from "next/link";

import { SignInForm } from "@/components/auth/sign-in-form";

export default function SignInPage() {
  return (
    <div className="grid w-full justify-items-center gap-4">
      <SignInForm />
      <p className="text-sm text-zinc-400">
        New to Botlane?{" "}
        <Link className="font-medium text-white underline" href="/sign-up">
          Create an account
        </Link>
      </p>
    </div>
  );
}
