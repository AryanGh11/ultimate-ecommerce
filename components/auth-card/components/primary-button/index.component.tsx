"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

export interface AuthCardPrimaryButtonProps {
  label: string;
  href: string;
}

export default function AuthCardPrimaryButton({
  label,
  href,
}: AuthCardPrimaryButtonProps) {
  return (
    <Link href={href} aria-label={label} className="w-full">
      <Button variant={"default"} className="w-full">
        {label}
      </Button>
    </Link>
  );
}
