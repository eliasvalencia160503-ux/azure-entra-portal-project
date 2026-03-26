"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function SignInButton() {
const { data: session } = useSession();

const buttonStyle = {
padding: "8px 14px",
border: "none",
borderRadius: "8px",
cursor: "pointer",
fontWeight: "600",
};
if (session) {
return (
<button
onClick={() => signOut()}
style={{
...buttonStyle,
backgroundColor: "#ef4444",
color: "white",
}}
>
Sign out
</button>
);
}
return (
<button
onClick={() => signIn("azure-ad")}
style={{
...buttonStyle,
backgroundColor: "#2563eb",
color: "white",
}}
>
Sign in with Microsoft
</button>
);
}