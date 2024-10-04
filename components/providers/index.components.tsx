"use client";

import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Providers() {
  return (
    <div className="flex flex-col items-center w-full gap-4">
      <ProviderButton
        label="Sign in with Google"
        icon={<FcGoogle className="w-5 h-5" />}
        onClick={() =>
          signIn("google", {
            redirect: false,
            callbackUrl: "/",
          })
        }
      />
      <ProviderButton
        label="Sign in with Github"
        icon={<FaGithub className="w-5 h-5" />}
        onClick={() =>
          signIn("github", {
            redirect: false,
            callbackUrl: "/",
          })
        }
      />
    </div>
  );
}

interface ProviderButtonProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => Promise<any>;
}

function ProviderButton({ label, icon, onClick }: ProviderButtonProps) {
  return (
    <Button className="flex gap-2 w-full" variant={"outline"} onClick={onClick}>
      {icon}
      {label}
    </Button>
  );
}
