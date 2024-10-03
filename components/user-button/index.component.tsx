"use client";

import { Session } from "next-auth";
import { signOut } from "next-auth/react";

export default function UserButton(session: Session) {
  const email = session.user?.email;

  return (
    <div>
      <h1>{email}</h1>
      <button onClick={() => signOut()}>Signout</button>
    </div>
  );
}
