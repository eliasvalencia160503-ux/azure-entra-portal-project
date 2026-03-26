"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import ProfileCard from "../components/ProfileCard";
import { getGraphProfile } from "../lib/graph";

export default function HomePage() {
const { data: session } = useSession();
const [profile, setProfile] = useState(null);
const [error, setError] = useState("");

useEffect(() => {
async function loadProfile() {
if (!session?.accessToken) return;
try {
const data = await getGraphProfile(session.accessToken);
setProfile(data);
} catch (err) {
setError("Could not load Microsoft Graph profile.");
}
}

loadProfile();
}, [session]);

return (
<div className="page-container">
<h1>Azure Entra Portal</h1>
<p className="muted">
Portfolio project for Microsoft Entra ID, RBAC, and Microsoft Graph.
</p>

{session ? (
<>
<div className="card">
<h2 className="section-title">Signed-in User</h2>
<p><strong>Name:</strong> {session.user?.name}</p>
<p><strong>Email:</strong> {session.user?.email}</p>

<div style={{ marginTop: "12px" }}>
<strong>Roles:</strong>
<div style={{ marginTop: "8px" }}>
{session.user?.roles?.length ? (
session.user.roles.map((role) => (
<span key={role} className="badge">
{role}
</span>
))
) : (
<span className="muted"> No roles found</span>
)}
</div>
</div>
</div>

{error && <p style={{ color: "#f87171" }}>{error}</p>}
<ProfileCard profile={profile} />
</>
) : (
<div className="card">
<p>Please sign in with Microsoft to continue testing the app.</p>
</div>
)}
</div>
);
}