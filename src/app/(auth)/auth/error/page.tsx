import Link from "next/link";

import { Card } from "@/components/ui/card";

export default function AuthErrorPage() {
  return (
    <Card className="w-full max-w-md p-6">
      <div className="grid gap-3">
        <h1 className="text-2xl font-semibold text-white">Authentication error</h1>
        <p className="text-sm text-zinc-400">
          We could not complete that sign-in attempt. Please try again.
        </p>
        <Link className="text-sm font-medium text-white underline" href="/sign-in">
          Back to sign in
        </Link>
      </div>
    </Card>
  );
}
