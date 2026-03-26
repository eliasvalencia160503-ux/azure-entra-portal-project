"use client";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RoleGuard({ children, allow }) {
const { data: session, status } = useSession();
const router = useRouter();

useEffect(() => {
if (status === "loading") return;

if (!session) {
signIn("azure-ad");
return;
}

const allowed = allow(session.user);

if (!allowed) {
router.push("/unauthorized");
}
}, [session, status, allow, router]);

if (status === "loading") {
return <p>Loading...</p>;
}

if (!session) {
return <p>Redirecting to sign in...</p>;
}

const allowed = allow(session.user);

if (!allowed) {
return <p>Checking permissions...</p>;
}

return children;
}