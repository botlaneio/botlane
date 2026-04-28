import { Button } from "@/components/ui/button";
import { signOutAction } from "@/server/actions/auth";

export function SignOutButton() {
  return (
    <form action={signOutAction}>
      <Button type="submit" variant="secondary">
        Sign out
      </Button>
    </form>
  );
}
