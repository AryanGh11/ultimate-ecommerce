"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

export interface AuthCardFooterButtonProps {
  label: string;
  href: string;
}

export default function AuthCardFooterButton({
  label,
  href,
}: AuthCardFooterButtonProps) {
  return (
    <Button variant={"ghost"} className="font-medium">
      <Link href={href} aria-label={label}>
        {label}
      </Link>
    </Button>
  );
}
