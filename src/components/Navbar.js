"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import SignInButton from "./SignInButton";

export default function Navbar() {
const { data: session } = useSession();

return (
<nav
style={{
display: "flex",
justifyContent: "space-between",
alignItems: "center",
padding: "16px 24px",
borderBottom: "1px solid #334155",
backgroundColor: "#111827",
color: "#e5e7eb",
}}
>
<div style={{ display: "flex", gap: "18px", fontWeight: "600" }}>
<Link href="/">Home</Link>
<Link href="/dashboard">Dashboard</Link>
<Link href="/support">Support</Link>
<Link href="/admin">Admin</Link>
</div>

<div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
{session?.user && (
<span style={{ fontSize: "14px", color: "#cbd5e1" }}>
{session.user.name || session.user.email}
</span>
)}
<SignInButton />
</div>
</nav>
);
}