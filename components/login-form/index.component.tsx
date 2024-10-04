"use client";

import AuthCard from "../auth-card";

export default function LoginForm() {
  return (
    <AuthCard
      title="Welcome back"
      primaryButton={{
        href: "/auth/register",
        label: "Create a new account",
      }}
      showProviders
    >
      <div></div>
    </AuthCard>
  );
}
