import Logo from "../logo";
import Link from "next/link";
import UserButton from "../user-button";

import { auth } from "@/server/auth";
import { Button } from "../ui/button";
import { LogInIcon } from "lucide-react";

export default async function Navbar() {
  const session = await auth();

  return (
    <header className="py-8">
      <nav>
        <ul className="flex justify-between items-center">
          <li>
            <Logo />
          </li>
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
