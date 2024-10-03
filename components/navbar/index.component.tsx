import Link from "next/link";
import { Button } from "../ui/button";
import UserButton from "../user-button";

import { auth } from "@/server/auth";
import { LogInIcon } from "lucide-react";

export default async function Navbar() {
  const session = await auth();

  return (
    <header className="bg-red-500 py-4">
      <nav>
        <ul className="flex justify-between">
          <li>Logo</li>
          {!session ? (
            <li>
              <Button asChild>
                <Link className="flex gap-2" href={"/auth/login"}>
                  <LogInIcon size={16} />
                  <span>Login</span>
                </Link>
              </Button>
            </li>
          ) : (
            <li>
              <UserButton
                user={session?.user}
                expires={session?.expires ?? ""}
              />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
